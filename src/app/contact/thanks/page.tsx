import type { Metadata } from "next";

import { HeroBackdrop } from "@/components/HeroBackdrop";
import { ButtonLink } from "@/components/site/ButtonLink";
import { Container } from "@/components/site/Container";

export const metadata: Metadata = {
  title: "Request received",
  description: "We’ll reply within two business days with next steps or clarifying questions.",
};

export default function ContactThanksPage() {
  return (
    <main className="aio-page" style={{ position: "relative" }}>
      <section className="aio-section aio-section--dark">
        <HeroBackdrop />
        <div className="aio-peak-overlay" aria-hidden="true" />
        <Container className="aio-container relative z-10">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <p className="aio-badge">CONTACT</p>
            <h1 className="mt-4 text-3xl font-semibold text-[rgb(var(--aio-text))] md:text-5xl">
              Request received.
            </h1>
            <p className="mt-4 text-base text-[rgba(var(--aio-text),.72)] md:text-lg">
              We’ll reply within two business days with next steps or a few clarifying questions.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="aio-card aio-card--light aio-card-hover w-full max-w-xl space-y-6 p-6 md:p-8">
              <div className="space-y-3 text-left">
                <h2 className="text-2xl font-semibold text-[rgba(var(--aio-ink),.92)]">
                  What happens next
                </h2>
                <ul className="aio-list aio-list--light text-sm">
                  <li>We confirm the workflow and success metric.</li>
                  <li>We review your stack + data access.</li>
                  <li>We recommend the next step: scan → sprint (one measurable outcome).</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/examples">View examples</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Back to contact
                </ButtonLink>
              </div>
              <p className="text-xs text-[rgba(var(--aio-ink),.7)]">
                Need urgency? Email{" "}
                <a className="aio-link" href="mailto:hello@ai-optimized.example">
                  hello@ai-optimized.example
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
