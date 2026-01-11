import type { Metadata } from "next";

import { HeroBackdrop } from "@/components/HeroBackdrop";
import { ButtonLink } from "@/components/site/ButtonLink";
import { Container } from "@/components/site/Container";

import { PartnerIntakeForm } from "./PartnerIntakeForm";

export const metadata: Metadata = {
  title: "Partner with AI Optimized",
  description:
    "Deliver measurable AI automation for your clients in 30 days — white-labelable, outcome-driven, and designed for lean teams.",
};

export default function PartnersPage() {
  return (
    <main className="aio-page" style={{ position: "relative" }}>
      <section className="aio-section aio-section--dark">
        <HeroBackdrop />
        <div className="aio-peak-overlay" aria-hidden="true" />
        <Container className="aio-container relative z-10">
          <div className="max-w-2xl space-y-5">
            <p className="aio-badge">AGENCIES &amp; PARTNERS</p>
            <h1 className="text-3xl font-semibold text-[rgb(var(--aio-text))] md:text-5xl">
              Partner with AI Optimized.
            </h1>
            <p className="text-base text-[rgba(var(--aio-text),.72)] md:text-lg">
              Deliver measurable AI automation for your clients in 30 days — white‑labelable,
              outcome‑driven, and designed for lean teams.
            </p>
            <p className="text-sm text-[rgba(var(--aio-text),.6)]">
              One workflow per sprint. Documentation + enablement included.
            </p>
          </div>
        </Container>
      </section>

      <section className="aio-section aio-section--light">
        <Container className="aio-container relative z-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,_1.15fr)_minmax(0,_0.85fr)]">
            <PartnerIntakeForm />

            <aside className="aio-card aio-card--light aio-card-hover flex h-full flex-col gap-6 p-6 md:p-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-[rgba(var(--aio-ink),.92)]">
                  What partners get
                </h2>
                <ul className="aio-list aio-list--light text-sm">
                  <li>White‑labelable delivery for your clients.</li>
                  <li>Shared documentation + handoff playbooks.</li>
                  <li>Outcome scoping + ROI ranges before build.</li>
                  <li>Priority scheduling for partner pipelines.</li>
                  <li>Tool‑agnostic implementation across your stack.</li>
                </ul>
              </div>

              <div className="h-px w-full bg-[rgba(var(--aio-brand),.12)]" />

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[rgba(var(--aio-ink),.86)]">
                  How it works
                </h3>
                <ul className="aio-list aio-list--light text-sm">
                  <li>Align on your offer + the workflows you want to ship.</li>
                  <li>Run a first client sprint with a single measurable outcome.</li>
                  <li>Turn it into a repeatable pipeline your team can sell.</li>
                </ul>
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                <ButtonLink href="/examples">View examples</ButtonLink>
                <ButtonLink href="/pricing" variant="secondary">
                  See pricing
                </ButtonLink>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
