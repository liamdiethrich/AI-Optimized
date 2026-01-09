"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import { env } from "@/lib/env";

type FormStatus = "idle" | "submitting" | "success" | "error" | "missing";

export function LeadForm() {
  const formId = env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  const [status, setStatus] = useState<FormStatus>(
    formId ? "idle" : "missing",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);

    if (!formId) {
      setStatus("missing");
      return;
    }

    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          "We hit a snag sending your note. Please try again in a moment.",
        );
        return;
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "We couldn't submit the form right now. Please refresh and try again.",
      );
    }
  };

  const isSubmitting = status === "submitting";
  const isMissing = status === "missing";

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-ink">Tell us about your team</h2>
        <p className="text-sm text-muted">
          Share a few details and we will map the fastest automation opportunity.
        </p>
      </div>

      {isMissing && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          This form is not configured yet. Add NEXT_PUBLIC_FORMSPREE_FORM_ID to
          your environment to enable submissions.
        </div>
      )}

      {status === "success" && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          Thanks! Your request is in. We'll respond within 2 business days.
        </div>
      )}

      {status === "error" && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
          {errorMessage ?? "Something went wrong. Please try again."}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-ink">
          Name
          <input
            className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-ink shadow-sm focus:border-slate-400 focus:outline-none"
            name="name"
            autoComplete="name"
            required
            disabled={isSubmitting}
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-ink">
          Work email
          <input
            className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-ink shadow-sm focus:border-slate-400 focus:outline-none"
            type="email"
            name="email"
            autoComplete="email"
            required
            disabled={isSubmitting}
          />
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-ink">
        Company
        <input
          className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-ink shadow-sm focus:border-slate-400 focus:outline-none"
          name="company"
          autoComplete="organization"
          disabled={isSubmitting}
        />
      </label>

      <label className="space-y-2 text-sm font-medium text-ink">
        What workflow needs attention?
        <textarea
          className="min-h-[140px] w-full rounded-xl border border-slate-200 px-4 py-2 text-sm text-ink shadow-sm focus:border-slate-400 focus:outline-none"
          name="message"
          disabled={isSubmitting}
          required
        />
      </label>

      <button
        className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:bg-slate-400"
        type="submit"
        disabled={isSubmitting || isMissing}
      >
        {isSubmitting ? "Sending..." : "Request the scan"}
      </button>

      <div className="text-xs text-muted">
        <p>We’ll respond within 2 business days.</p>
        <p>No spam.</p>
      </div>
    </form>
  );
}
