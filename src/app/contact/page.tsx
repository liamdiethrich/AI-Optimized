import { LeadForm } from "@/components/forms/LeadForm";

export default function ContactPage() {
  return (
    <div>
      <section className="bg-surface">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Contact
            </p>
            <h1 className="text-4xl font-semibold text-ink sm:text-5xl">
              Book your AI Opportunity Scan.
            </h1>
            <p className="max-w-2xl text-lg text-muted">
              Share the workflow that is slowing your team down. We will respond
              within 2 business days with next steps.
            </p>
            <div className="space-y-2 text-sm text-muted">
              <p>Tell us the systems involved and the outcome you want.</p>
              <p>No spam. Just a clear plan for your next automation.</p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <LeadForm />
          </div>
        </div>
      </section>
    </div>
import { Container } from "@/components/site/Container";
import { siteContent } from "@/content/site";
import { ContactForm } from "./ContactForm";

export default function Page() {
  const { contact } = siteContent.pages;

  return (
    <Container className="space-y-12">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-text-muted">
          {contact.eyebrow}
        </p>
        <h1 className="text-3xl font-semibold text-text md:text-4xl">{contact.title}</h1>
        <p className="max-w-3xl text-base text-text-muted">{contact.subtitle}</p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_0.9fr)]">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-text">{contact.formTitle}</h2>
            <p className="text-text-muted">{contact.formSubtitle}</p>
          </div>
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
    </Container>
  );
}
