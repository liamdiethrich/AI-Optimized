import type { Metadata } from "next";
import Link from "next/link";

import { HeroBackdrop } from "@/components/HeroBackdrop";
import { howItWorks, siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: howItWorks.hero.title,
  description: howItWorks.hero.subtitle
};

export default function HowItWorksPage() {
  return (
    <main className="aio-page aio-section aio-section--dark" style={{ position: "relative" }}>
      <HeroBackdrop />
      <section className="aio-section pt-20">
        <div className="aio-container relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="aio-badge">How it works</p>
            <h1 className="text-4xl font-semibold text-[rgb(var(--aio-text))] sm:text-5xl">
              {howItWorks.hero.title}
            </h1>
            <p className="text-lg text-[rgba(var(--aio-text),.72)]">
              {howItWorks.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/pricing" className="aio-btn aio-btn--secondary">
                View pricing
              </Link>
              <Link href="/scan" className="aio-btn aio-btn--primary">
                Start with the scan
              </Link>
            </div>
          </div>
          <div className="aio-card aio-card--light p-6 text-[rgba(var(--aio-ink),.85)]">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-[rgb(var(--aio-ink))]">
                What you get in 30 days
              </h2>
              <ul className="aio-list aio-list--light text-sm">
                {howItWorks.outputs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="aio-section">
        <div className="aio-container relative z-10 space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-[rgb(var(--aio-text))]">
              The 4-week sprint
            </h2>
            <p className="text-[rgba(var(--aio-text),.7)]">
              A focused, repeatable delivery motion that keeps everyone aligned and
              shipping fast.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {howItWorks.timeline.map((step) => (
              <div key={step.title} className="aio-card aio-card-hover p-6">
                <h3 className="text-lg font-semibold text-[rgb(var(--aio-text))]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[rgba(var(--aio-text),.7)]">
                  {step.description}
                </p>
                <ul className="aio-list mt-3 text-sm">
                  {step.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aio-section">
        <div className="aio-container relative z-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-[rgb(var(--aio-text))]">
              Inputs we need
            </h2>
            <p className="text-[rgba(var(--aio-text),.7)]">
              We keep prep light. If you can share the workflow and define success, we
              can get moving.
            </p>
            <ul className="aio-list text-sm">
              {howItWorks.inputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-[rgb(var(--aio-text))]">
              Outputs you receive
            </h2>
            <p className="text-[rgba(var(--aio-text),.7)]">
              A clear handoff, visibility into results, and a system your team can run.
            </p>
            <ul className="aio-list text-sm">
              {howItWorks.outputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="aio-section">
        <div className="aio-container relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-3">
            <p className="aio-badge">Security</p>
            <h2 className="text-3xl font-semibold text-[rgb(var(--aio-text))]">
              Built for modern compliance expectations
            </h2>
            <p className="text-[rgba(var(--aio-text),.7)]">
              We treat security as a product requirement, not an afterthought. Every
              sprint includes review with your stakeholders.
            </p>
          </div>
          <div className="aio-card aio-card--light p-6 text-[rgba(var(--aio-ink),.85)]">
            <ul className="aio-list aio-list--light text-sm">
              {howItWorks.security.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="aio-section">
        <div className="aio-container relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-3">
            <p className="aio-badge">{siteContent.site.security.title}</p>
            <h2 className="text-3xl font-semibold text-[rgb(var(--aio-text))]">
              Security & data handling
            </h2>
            <p className="text-[rgba(var(--aio-text),.7)]">
              {siteContent.site.security.microcopy}
            </p>
          </div>
          <div className="aio-card aio-card--light p-6 text-[rgba(var(--aio-ink),.85)]">
            <ul className="aio-list aio-list--light text-sm">
              {siteContent.site.security.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="aio-section">
        <div className="aio-container relative z-10">
          <div className="aio-card aio-card--light grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-3 text-[rgba(var(--aio-ink),.85)]">
              <p className="aio-badge aio-badge--light">Testing before deployment</p>
              <h2 className="text-2xl font-semibold text-[rgb(var(--aio-ink))]">
                Simulation runs + acceptance criteria before launch.
              </h2>
              <p className="text-[rgba(var(--aio-ink),.7)]">
                We validate on test batches, agree on quality thresholds, and only move to
                production once operators sign off.
              </p>
            </div>
            <ul className="aio-list aio-list--light text-sm">
              <li>Dry-run simulations against historical tickets or workflows.</li>
              <li>Human review of edge cases and escalation paths.</li>
              <li>Success criteria documented before rollout.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="aio-section">
        <div className="aio-container relative z-10">
          <div className="aio-card aio-card--light flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">
            <div className="space-y-2 text-[rgba(var(--aio-ink),.85)]">
              <h2 className="text-2xl font-semibold text-[rgb(var(--aio-ink))]">
                {howItWorks.cta.title}
              </h2>
              <p className="text-[rgba(var(--aio-ink),.7)]">{howItWorks.cta.description}</p>
            </div>
            <Link href="/scan" className="aio-btn aio-btn--primary">
              {howItWorks.cta.action}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
