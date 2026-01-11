"use client";

import { useSearchParams } from "next/navigation";

import { siteContent } from "@/content/site";

export function ContactForm() {
  const { contact } = siteContent.pages;
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") ?? "";

  return (
    <form
      className="space-y-5 rounded-3xl border border-border bg-surface p-6"
      onSubmit={(event) => event.preventDefault()}
    >
      <input type="hidden" name="mode" value={mode} />
      <div className="space-y-1">
        <label className="text-sm font-semibold text-text" htmlFor="contact-name">
          {contact.fields.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jordan Lee"
          className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-text outline-none focus:border-brand-accent"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-semibold text-text" htmlFor="contact-email">
          {contact.fields.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jordan@company.com"
          className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-text outline-none focus:border-brand-accent"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-text" htmlFor="contact-company">
            {contact.fields.company}
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Nimbus Labs"
            className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-text outline-none focus:border-brand-accent"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-text" htmlFor="contact-role">
            {contact.fields.role}
          </label>
          <input
            id="contact-role"
            name="role"
            type="text"
            autoComplete="organization-title"
            placeholder="RevOps, CX, or Ops lead"
            className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-text outline-none focus:border-brand-accent"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-semibold text-text" htmlFor="contact-goals">
          {contact.fields.goals}
        </label>
        <textarea
          id="contact-goals"
          name="goals"
          rows={4}
          placeholder="Example: automate weekly reporting and reduce handoffs between sales + success."
          className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-text outline-none focus:border-brand-accent"
        />
      </div>
      <button
        type="button"
        className="w-full rounded-xl bg-brand-primary px-4 py-2 text-sm font-semibold text-white"
      >
        {contact.primaryCta}
      </button>
      <p className="text-xs text-text-muted">{contact.helperText}</p>
    </form>
  );
}
