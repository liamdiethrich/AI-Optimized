import type { Metadata } from "next";

import { ButtonLink } from "@/components/site/ButtonLink";
import { Container } from "@/components/site/Container";
import { siteContent } from "@/content/site";

import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: siteContent.pages.contact.title,
  description: siteContent.pages.contact.subtitle
};

export default function ContactPage() {
  const { contact } = siteContent.pages;

  return (
    <Container className="space-y-12">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-text-muted">
          {contact.eyebrow}
        </p>
        <h1 className="text-3xl font-semibold text-text md:text-4xl">{contact.title}</h1>
        <p className="max-w-3xl text-base text-text-muted">{contact.subtitle}</p>
        <ButtonLink href={siteContent.nav.cta.href}>{siteContent.nav.cta.label}</ButtonLink>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_0.9fr)]">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-text">{contact.formTitle}</h2>
            <p className="text-text-muted">{contact.formSubtitle}</p>
          </div>
          <p className="text-sm text-text-muted">
            Partner or agency?{" "}
            <a
              className="font-semibold text-text underline decoration-brand-accent/60 underline-offset-4"
              href={siteContent.site.partners.ctaHref}
            >
              Switch to partner intake
            </a>
            .
          </p>
          <ContactForm />
        </div>
        <aside className="space-y-6 rounded-3xl border border-border bg-surface-muted p-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-text">Need a faster reply?</h3>
            <p className="text-sm text-text-muted">
              {contact.fallbackEmailLabel}{" "}
              <a
                className="font-semibold text-text underline decoration-brand-accent/60 underline-offset-4"
                href={`mailto:${contact.fallbackEmail}`}
              >
                {contact.fallbackEmail}
              </a>
              .
            </p>
          </div>
          <div className="space-y-3 rounded-2xl border border-border bg-background p-4">
            <p className="text-sm font-semibold text-text">{contact.bookingCtaHeading}</p>
            <p className="text-sm text-text-muted">{contact.bookingCtaNote}</p>
            <a
              className="inline-flex w-full items-center justify-center rounded-xl border border-brand-accent/60 px-4 py-2 text-sm font-semibold text-brand-accent"
              href={contact.bookingCtaHref}
            >
              {contact.bookingCtaLabel}
            </a>
          </div>
        </aside>
      </section>

      <section className="rounded-3xl border border-border bg-surface p-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">
              {siteContent.site.security.title}
            </p>
            <h2 className="text-2xl font-semibold text-text">Security & data handling</h2>
            <p className="text-sm text-text-muted">{siteContent.site.security.microcopy}</p>
          </div>
          <ul className="space-y-2 text-sm text-text-muted">
            {siteContent.site.security.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-surface-muted p-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">
            {siteContent.site.partners.title}
          </p>
          <ul className="space-y-2 text-sm text-text-muted">
            {siteContent.site.partners.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
          <a
            className="inline-flex w-fit rounded-full border border-brand-accent/60 px-4 py-2 text-sm font-semibold text-brand-accent"
            href={siteContent.site.partners.ctaHref}
          >
            {siteContent.site.partners.ctaLabel}
          </a>
        </div>
      </section>
    </Container>
  );
}
