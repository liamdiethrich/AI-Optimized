"use client";

import { useMemo, useState } from "react";

import { ROICalculator, calculateRoiRange, type RoiValues } from "@/components/site/ROICalculator";
import { siteContent } from "@/content/site";
import { env } from "@/lib/env";
import { scanSchema, type ScanFormData } from "@/lib/scanSchema";
import type { z } from "zod";

const DEPARTMENTS = ["Support", "RevOps", "Finance", "Ops", "Other"];
const TEAM_SIZES = ["1-10", "11-25", "26-50", "51-100", "100+"];
const PAIN_TYPES = [
  "Slow handoffs",
  "Manual reporting",
  "Repetitive requests",
  "Errors / rework",
  "Tool sprawl",
];
const TOOL_OPTIONS = [
  "HubSpot / Salesforce",
  "Slack",
  "Google Workspace",
  "Notion / Confluence",
  "Zendesk / Intercom",
  "Stripe",
  "Airtable",
  "Jira",
  "Other",
];
const SENSITIVITY_OPTIONS = [
  "Redacted examples are fine",
  "Contains customer PII",
  "Contains financial data",
  "Contains healthcare data",
  "Prefer to discuss",
];
const ACCESS_OPTIONS = [
  "API key",
  "Service account",
  "Operate in our environment",
  "Unsure / TBD",
];

const DEFAULT_VALUES: ScanFormData = {
  name: "",
  email: "",
  company: "",
  role: "",
  teamSize: "",
  department: "",
  workflowDescription: "",
  runsPerWeek: 20,
  minutesPerRun: 15,
  hourlyCost: 60,
  errorMinutesPerRun: 0,
  painTypes: [],
  tools: [],
  otherTools: "",
  sensitivity: [],
  accessPreference: "",
  approvalGates: "",
};

const optionalSchema = scanSchema.partial();

const STEP_VALIDATORS: Array<(data: ScanFormData) => z.SafeParseReturnType<unknown, unknown>> = [
  (data) => scanSchema.pick({ email: true }).safeParse({ email: data.email }),
  (data) =>
    scanSchema
      .pick({ workflowDescription: true })
      .safeParse({ workflowDescription: data.workflowDescription }),
  () => optionalSchema.safeParse({}),
  () => optionalSchema.safeParse({}),
  (data) =>
    scanSchema
      .pick({ email: true, workflowDescription: true })
      .safeParse({ email: data.email, workflowDescription: data.workflowDescription }),
];

type FieldErrors = Partial<Record<keyof ScanFormData, string>>;

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function OpportunityScanWizard() {
  const scanCopy = siteContent.site.scan;
  const bookingCta = siteContent.pages.contact;
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState<ScanFormData>(DEFAULT_VALUES);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmissionState>("idle");
  const steps = scanCopy.steps;
  const formspreeId = env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  const roiValues = useMemo<RoiValues>(
    () => ({
      runsPerWeek: formData.runsPerWeek ?? 0,
      minutesPerRun: formData.minutesPerRun ?? 0,
      hourlyCost: formData.hourlyCost ?? 0,
      errorMinutesPerRun: formData.errorMinutesPerRun ?? 0,
    }),
    [formData.errorMinutesPerRun, formData.hourlyCost, formData.minutesPerRun, formData.runsPerWeek],
  );

  const roiRange = useMemo(() => calculateRoiRange(roiValues), [roiValues]);

  const updateField = <T extends keyof ScanFormData>(field: T, value: ScanFormData[T]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const toggleMultiValue = (field: "painTypes" | "tools" | "sensitivity", value: string) => {
    setFormData((prev) => {
      const existing = new Set(prev[field] ?? []);
      if (existing.has(value)) {
        existing.delete(value);
      } else {
        existing.add(value);
      }
      return { ...prev, [field]: Array.from(existing) };
    });
  };

  const validateStep = () => {
    const validator = STEP_VALIDATORS[stepIndex];
    if (!validator) {
      return true;
    }
    const result = validator(formData);
    if (result.success) {
      return true;
    }
    const nextErrors: FieldErrors = {};
    result.error.issues.forEach((issue: z.ZodIssue) => {
      const field = issue.path[0] as keyof ScanFormData;
      nextErrors[field] = issue.message;
    });
    setFieldErrors((prev) => ({ ...prev, ...nextErrors }));
    return false;
  };

  const handleNext = () => {
    if (!validateStep()) {
      return;
    }
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    if (!validateStep()) {
      return;
    }
    if (!formspreeId) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          hoursSavedMonthLow: roiRange.hoursLow,
          hoursSavedMonthHigh: roiRange.hoursHigh,
          valueLow: roiRange.valueLow,
          valueHigh: roiRange.valueHigh,
        }),
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      setStatus("success");
    } catch (_error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="aio-card aio-form-card space-y-6">
        <div className="space-y-2">
          <p className="aio-badge w-fit">Scan submitted</p>
          <h2 className="text-2xl font-semibold text-[rgb(var(--aio-text))]">
            We will respond within 2 business days.
          </h2>
          <p className="text-sm text-[rgba(var(--aio-text),.7)]">
            Expect an email with your opportunity map draft and suggested next steps.
          </p>
        </div>
        <a
          href={bookingCta.bookingCtaHref}
          className="aio-btn aio-btn--primary w-fit"
        >
          {bookingCta.bookingCtaLabel}
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="aio-stepper">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={[
              "aio-step",
              index === stepIndex ? "aio-step--active" : "",
              index < stepIndex ? "aio-step--done" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            Step {index + 1}: {step.title}
          </div>
        ))}
      </div>

      <div className="aio-card aio-form-card">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-[rgb(var(--aio-text))]">
            {steps[stepIndex]?.title}
          </h2>
          <p className="text-sm text-[rgba(var(--aio-text),.7)]">
            {steps[stepIndex]?.description}
          </p>
        </div>

        <div className="mt-6 space-y-6">
          {stepIndex === 0 && (
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-[rgba(var(--aio-text),.9)]">
                <span className="font-semibold">Full name</span>
                <input
                  className="aio-input"
                  name="name"
                  value={formData.name}
                  onChange={(event) => updateField("name", event.target.value)}
                />
              </label>
              <label className="space-y-2 text-sm text-[rgba(var(--aio-text),.9)]">
                <span className="font-semibold">Work email *</span>
                <input
                  className="aio-input"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                />
                {fieldErrors.email && (
                  <p className="text-xs text-red-500">{fieldErrors.email}</p>
                )}
              </label>
              <label className="space-y-2 text-sm text-[rgba(var(--aio-text),.9)]">
                <span className="font-semibold">Company</span>
                <input
                  className="aio-input"
                  name="company"
                  value={formData.company}
                  onChange={(event) => updateField("company", event.target.value)}
                />
              </label>
              <label className="space-y-2 text-sm text-[rgba(var(--aio-text),.9)]">
                <span className="font-semibold">Role / team</span>
                <input
                  className="aio-input"
                  name="role"
                  value={formData.role}
                  onChange={(event) => updateField("role", event.target.value)}
                />
              </label>
              <label className="space-y-2 text-sm text-[rgba(var(--aio-text),.9)] md:col-span-2">
                <span className="font-semibold">Team size</span>
                <select
                  className="aio-input"
                  value={formData.teamSize}
                  onChange={(event) => updateField("teamSize", event.target.value)}
                >
                  <option value="">Select a range</option>
                  {TEAM_SIZES.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}

          {stepIndex === 1 && (
            <div className="space-y-6">
              <label className="space-y-2 text-sm text-[rgba(var(--aio-text),.9)]">
                <span className="font-semibold">Department</span>
                <select
                  className="aio-input"
                  value={formData.department}
                  onChange={(event) => updateField("department", event.target.value)}
                >
                  <option value="">Select department</option>
                  {DEPARTMENTS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm text-[rgba(var(--aio-text),.9)]">
                <span className="font-semibold">Workflow description *</span>
                <textarea
                  className="aio-input min-h-[140px]"
                  value={formData.workflowDescription}
                  onChange={(event) => updateField("workflowDescription", event.target.value)}
                />
                {fieldErrors.workflowDescription && (
                  <p className="text-xs text-red-500">{fieldErrors.workflowDescription}</p>
                )}
              </label>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm text-[rgba(var(--aio-text),.9)]">
                  <span className="font-semibold">Runs per week</span>
                  <input
                    type="number"
                    min={0}
                    className="aio-input"
                    value={formData.runsPerWeek ?? 0}
                    onChange={(event) => updateField("runsPerWeek", Number(event.target.value))}
                  />
                </label>
                <label className="space-y-2 text-sm text-[rgba(var(--aio-text),.9)]">
                  <span className="font-semibold">Minutes per run</span>
                  <input
                    type="number"
                    min={0}
                    className="aio-input"
                    value={formData.minutesPerRun ?? 0}
                    onChange={(event) => updateField("minutesPerRun", Number(event.target.value))}
                  />
                </label>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[rgba(var(--aio-text),.9)]">Pain points</p>
                <div className="grid gap-3 md:grid-cols-2">
                  {PAIN_TYPES.map((pain) => (
                    <label
                      key={pain}
                      className="flex items-center gap-2 text-sm text-[rgba(var(--aio-text),.72)]"
                    >
                      <input
                        className="aio-input h-4 w-4 p-0"
                        type="checkbox"
                        checked={formData.painTypes?.includes(pain) ?? false}
                        onChange={() => toggleMultiValue("painTypes", pain)}
                      />
                      <span>{pain}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {stepIndex === 2 && (
            <div className="space-y-6">
              <div className="grid gap-3 md:grid-cols-2">
                {TOOL_OPTIONS.map((tool) => (
                  <label
                    key={tool}
                    className="flex items-center gap-2 text-sm text-[rgba(var(--aio-text),.72)]"
                  >
                    <input
                      className="aio-input h-4 w-4 p-0"
                      type="checkbox"
                      checked={formData.tools?.includes(tool) ?? false}
                      onChange={() => toggleMultiValue("tools", tool)}
                    />
                    <span>{tool}</span>
                  </label>
                ))}
              </div>
              <label className="space-y-2 text-sm text-[rgba(var(--aio-text),.9)]">
                <span className="font-semibold">Other tools</span>
                <input
                  className="aio-input"
                  value={formData.otherTools}
                  onChange={(event) => updateField("otherTools", event.target.value)}
                />
              </label>
            </div>
          )}

          {stepIndex === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[rgba(var(--aio-text),.9)]">
                  Data sensitivity
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {SENSITIVITY_OPTIONS.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 text-sm text-[rgba(var(--aio-text),.72)]"
                    >
                      <input
                        className="aio-input h-4 w-4 p-0"
                        type="checkbox"
                        checked={formData.sensitivity?.includes(option) ?? false}
                        onChange={() => toggleMultiValue("sensitivity", option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <label className="space-y-2 text-sm text-[rgba(var(--aio-text),.9)]">
                <span className="font-semibold">Access preference</span>
                <select
                  className="aio-input"
                  value={formData.accessPreference}
                  onChange={(event) => updateField("accessPreference", event.target.value)}
                >
                  <option value="">Select an option</option>
                  {ACCESS_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm text-[rgba(var(--aio-text),.9)]">
                <span className="font-semibold">Approval gates required?</span>
                <select
                  className="aio-input"
                  value={formData.approvalGates}
                  onChange={(event) => updateField("approvalGates", event.target.value)}
                >
                  <option value="">Select an option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Unsure">Unsure</option>
                </select>
              </label>
            </div>
          )}

          {stepIndex === 4 && (
            <div className="space-y-6">
              <ROICalculator
                values={roiValues}
                onValuesChange={(values) => {
                  updateField("runsPerWeek", values.runsPerWeek);
                  updateField("minutesPerRun", values.minutesPerRun);
                  updateField("hourlyCost", values.hourlyCost);
                  updateField("errorMinutesPerRun", values.errorMinutesPerRun);
                }}
              />
              <div className="space-y-3 rounded-2xl border border-border bg-background p-4 text-sm text-[rgba(var(--aio-text),.72)]">
                <p className="text-sm font-semibold text-[rgba(var(--aio-text),.9)]">
                  Review summary
                </p>
                <div className="grid gap-2 md:grid-cols-2">
                  <p>
                    <span className="font-semibold text-[rgba(var(--aio-text),.9)]">
                      Contact:
                    </span>{" "}
                    {formData.name || ""}{" "}
                    ({formData.email || ""})
                  </p>
                  <p>
                    <span className="font-semibold text-[rgba(var(--aio-text),.9)]">
                      Company:
                    </span>{" "}
                    {formData.company || ""}
                  </p>
                  <p>
                    <span className="font-semibold text-[rgba(var(--aio-text),.9)]">
                      Role:
                    </span>{" "}
                    {formData.role || ""}
                  </p>
                  <p>
                    <span className="font-semibold text-[rgba(var(--aio-text),.9)]">
                      Team size:
                    </span>{" "}
                    {formData.teamSize || ""}
                  </p>
                  <p>
                    <span className="font-semibold text-[rgba(var(--aio-text),.9)]">
                      Department:
                    </span>{" "}
                    {formData.department || ""}
                  </p>
                  <p>
                    <span className="font-semibold text-[rgba(var(--aio-text),.9)]">
                      Pain points:
                    </span>{" "}
                    {formData.painTypes?.join(", ") || ""}
                  </p>
                  <p>
                    <span className="font-semibold text-[rgba(var(--aio-text),.9)]">
                      Tools:
                    </span>{" "}
                    {formData.tools?.join(", ") || ""}
                  </p>
                  <p>
                    <span className="font-semibold text-[rgba(var(--aio-text),.9)]">
                      Other tools:
                    </span>{" "}
                    {formData.otherTools || ""}
                  </p>
                  <p className="md:col-span-2">
                    <span className="font-semibold text-[rgba(var(--aio-text),.9)]">
                      Workflow:
                    </span>{" "}
                    {formData.workflowDescription || ""}
                  </p>
                  <p>
                    <span className="font-semibold text-[rgba(var(--aio-text),.9)]">
                      Sensitivity:
                    </span>{" "}
                    {formData.sensitivity?.join(", ") || ""}
                  </p>
                  <p>
                    <span className="font-semibold text-[rgba(var(--aio-text),.9)]">
                      Access:
                    </span>{" "}
                    {formData.accessPreference || ""}
                  </p>
                  <p>
                    <span className="font-semibold text-[rgba(var(--aio-text),.9)]">
                      Approval gates:
                    </span>{" "}
                    {formData.approvalGates || ""}
                  </p>
                </div>
                <p className="text-xs text-[rgba(var(--aio-text),.6)]">
                  {scanCopy.privacyMicrocopy}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            className="aio-btn aio-btn--secondary"
            onClick={handleBack}
            disabled={stepIndex === 0}
          >
            Back
          </button>

          {stepIndex < steps.length - 1 ? (
            <button
              type="button"
              className="aio-btn aio-btn--primary"
              onClick={handleNext}
            >
              Continue
            </button>
          ) : (
            <button
              type="button"
              className="aio-btn aio-btn--primary disabled:cursor-not-allowed disabled:opacity-60"
              onClick={handleSubmit}
              disabled={status === "submitting" || !formspreeId}
            >
              {status === "submitting" ? "Submitting…" : scanCopy.submitCta}
            </button>
          )}
        </div>

        {status === "error" && (
          <p className="mt-4 text-sm text-red-500">
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        {!formspreeId && (
          <p className="mt-4 text-xs text-[rgba(var(--aio-text),.6)]">
            Add NEXT_PUBLIC_FORMSPREE_FORM_ID to enable submissions in this environment.
          </p>
        )}
      </div>
    </div>
  );
}
