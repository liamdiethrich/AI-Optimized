import type { Metadata } from "next";

import { HeroBackdrop } from "@/components/HeroBackdrop";
import { siteContent } from "@/content/site";

import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: siteContent.pages.contact.title,
  description: siteContent.pages.contact.subtitle
};

export default function ContactPage() {
  const { contact } = siteContent.pages;

  return (
    <main className="aio-page" style={{ position: "relative" }}>
      <section
        className="aio-section aio-section--dark"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <HeroBackdrop />
        <div className="aio-container space-y-4" style={{ position: "relative", zIndex: 1 }}>
          <p className="aio-badge">{contact.eyebrow}</p>
          <h1 className="text-3xl font-semibold md:text-4xl">{contact.title}</h1>
          <p className="max-w-3xl text-base text-[rgba(var(--aio-text),.72)]">
            {contact.subtitle}
          </p>
          <a className="aio-btn aio-btn--primary w-fit" href={siteContent.nav.cta.href}>
            {siteContent.nav.cta.label}
          </a>
        </div>
      </section>

      <section className="aio-section aio-section--light">
        <div className="aio-container grid gap-8 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_0.9fr)]">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">{contact.formTitle}</h2>
              <p className="text-[rgba(var(--aio-ink),.7)]">{contact.formSubtitle}</p>
            </div>
            <p className="text-sm text-[rgba(var(--aio-ink),.7)]">
              Partner or agency?{" "}
              <a className="aio-link font-semibold" href={siteContent.site.partners.ctaHref}>
                Switch to partner intake
              </a>
              .
            </p>
            <ContactForm />
          </div>
          <div className="space-y-3 rounded-2xl border border-border bg-background p-4">
            <p className="text-sm font-semibold text-text">{contact.bookingCtaHeading}</p>
            <p className="text-sm text-text-muted">{contact.bookingCtaNote}</p>
            <a
              className="inline-flex w-full items-center justify-center rounded-xl border border-brand-accent/60 px-4 py-2 text-sm font-semibold text-brand-accent"
              href={contact.bookingCtaHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.bookingCtaLabel}
            </a>
          </div>
        </aside>
      </section>

      <section className="aio-section aio-section--light">
        <div className="aio-container aio-card p-6">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgba(var(--aio-ink),.6)]">
                {siteContent.site.security.title}
              </p>
              <h2 className="text-2xl font-semibold">Security & data handling</h2>
              <p className="text-sm text-[rgba(var(--aio-ink),.7)]">
                {siteContent.site.security.microcopy}
              </p>
            </div>
            <ul className="aio-list text-sm">
              {siteContent.site.security.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="aio-section aio-section--light">
        <div className="aio-container aio-card p-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgba(var(--aio-ink),.6)]">
              {siteContent.site.partners.title}
            </p>
            <ul className="aio-list text-sm">
              {siteContent.site.partners.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <a className="aio-btn aio-btn--secondary w-fit" href={siteContent.site.partners.ctaHref}>
              {siteContent.site.partners.ctaLabel}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
