"use client";

import { useState } from "react";

const emailRecipient = "hello@ai-optimized.example";

const fieldLabels: Record<string, string> = {
  name: "Full name",
  email: "Work email",
  agency: "Agency / firm",
  website: "Website",
  partnerType: "Partner type",
  clientSize: "Typical client size",
  offerings: "What are you looking to offer?",
  volume: "Expected monthly volume",
  notes: "Notes",
};

function buildMailto(formData: FormData) {
  const subject = `Partner intake — ${formData.get("name") || "New request"}`;
  const formattedLines = Object.entries(fieldLabels).map(([key, label]) => {
    const values = formData.getAll(key).filter(Boolean).map(String);
    return `${label}: ${values.join(", ")}`;
  });

  return `mailto:${emailRecipient}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(formattedLines.join("\n"))}`;
}

export function PartnerIntakeForm() {
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <form
      className="aio-card aio-card--light aio-card-hover aio-form-card space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const mailto = buildMailto(formData);
        window.location.href = mailto;
        setSuccessMessage(
          "Email draft opened. If it didn’t, copy the details and email us.",
        );
      }}
    >
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-[rgba(var(--aio-ink),.92)]">
          Partner intake
        </h2>
        <p className="text-sm text-[rgba(var(--aio-ink),.72)]">
          Share a few details and we’ll propose the fastest way to work together. No sensitive
          client data needed.
        </p>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold text-[rgba(var(--aio-ink),.8)]" htmlFor="partner-name">
          Full name
        </label>
        <input
          id="partner-name"
          name="name"
          type="text"
          placeholder="Jordan Lee"
          className="aio-input aio-input--light"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-semibold text-[rgba(var(--aio-ink),.8)]" htmlFor="partner-email">
          Work email
        </label>
        <input
          id="partner-email"
          name="email"
          type="email"
          placeholder="jordan@agency.com"
          className="aio-input aio-input--light"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-[rgba(var(--aio-ink),.8)]" htmlFor="partner-agency">
            Agency / firm
          </label>
          <input
            id="partner-agency"
            name="agency"
            type="text"
            placeholder="Nimbus Labs"
            className="aio-input aio-input--light"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-[rgba(var(--aio-ink),.8)]" htmlFor="partner-website">
            Website
          </label>
          <input
            id="partner-website"
            name="website"
            type="url"
            placeholder="https://"
            className="aio-input aio-input--light"
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-[rgba(var(--aio-ink),.8)]" htmlFor="partner-type">
            Partner type
          </label>
          <select id="partner-type" name="partnerType" className="aio-input aio-input--light">
            <option>Agency</option>
            <option>Consultancy</option>
            <option>Platform</option>
            <option>Other</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-[rgba(var(--aio-ink),.8)]" htmlFor="partner-size">
            Typical client size
          </label>
          <select id="partner-size" name="clientSize" className="aio-input aio-input--light">
            <option>SMB</option>
            <option>Mid-market</option>
            <option>Mixed</option>
            <option>Enterprise</option>
          </select>
        </div>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold text-[rgba(var(--aio-ink),.8)]">
          What are you looking to offer?
        </legend>
        <div className="grid gap-2 text-sm text-[rgba(var(--aio-ink),.72)] sm:grid-cols-2">
          {[
            "Opportunity Scan",
            "30‑day delivery sprint",
            "Ongoing optimization",
            "White‑label delivery",
          ].map((label) => (
            <label key={label} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="offerings"
                value={label}
                className="h-4 w-4 rounded border border-[rgba(var(--aio-brand),.35)] text-[rgb(var(--aio-brand-2))]"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-[rgba(var(--aio-ink),.8)]" htmlFor="partner-volume">
            Expected monthly volume
          </label>
          <select id="partner-volume" name="volume" className="aio-input aio-input--light">
            <option>1–2</option>
            <option>3–5</option>
            <option>6–10</option>
            <option>10+</option>
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold text-[rgba(var(--aio-ink),.8)]" htmlFor="partner-notes">
          Notes
        </label>
        <textarea
          id="partner-notes"
          name="notes"
          rows={4}
          placeholder="Tell us what you want to ship, what tools you support, and any timelines."
          className="aio-input aio-input--light"
        />
      </div>

      <div className="space-y-3">
        <button type="submit" className="aio-btn aio-btn--primary w-full text-sm">
          Request partner intro
        </button>
        <p className="text-xs text-[rgba(var(--aio-ink),.68)]">
          Prefer email?{" "}
          <a className="aio-link" href="mailto:hello@ai-optimized.example">
            hello@ai-optimized.example
          </a>
        </p>
        {successMessage ? (
          <p className="text-xs font-semibold text-[rgba(var(--aio-ink),.86)]">
            {successMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
