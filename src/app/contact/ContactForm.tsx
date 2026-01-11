"use client";

import { useSearchParams } from "next/navigation";

import { siteContent } from "@/content/site";

export function ContactForm() {
  const { contact } = siteContent.pages;
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") ?? "";

  return (
    <form
      className="aio-card aio-card-hover space-y-5 p-6"
      onSubmit={(event) => event.preventDefault()}
    >
      <input type="hidden" name="mode" value={mode} />
      <div className="space-y-1">
        <label className="text-sm font-semibold" htmlFor="contact-name">
          {contact.fields.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jordan Lee"
          className="aio-input text-sm"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-semibold" htmlFor="contact-email">
          {contact.fields.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jordan@company.com"
          className="aio-input text-sm"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-semibold" htmlFor="contact-company">
            {contact.fields.company}
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Nimbus Labs"
            className="aio-input text-sm"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold" htmlFor="contact-role">
            {contact.fields.role}
          </label>
          <input
            id="contact-role"
            name="role"
            type="text"
            autoComplete="organization-title"
            placeholder="RevOps, CX, or Ops lead"
            className="aio-input text-sm"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-semibold" htmlFor="contact-goals">
          {contact.fields.goals}
        </label>
        <textarea
          id="contact-goals"
          name="goals"
          rows={4}
          placeholder="Example: automate weekly reporting and reduce handoffs between sales + success."
          className="aio-input text-sm"
        />
      </div>
      <button
        type="button"
        className="aio-btn aio-btn--primary w-full"
      >
        {contact.primaryCta}
      </button>
      <p className="text-xs text-[rgba(var(--aio-ink),.62)]">{contact.helperText}</p>
    </form>
  );
}
