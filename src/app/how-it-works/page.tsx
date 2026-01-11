import type { Metadata } from "next";
import Link from "next/link";

import { howItWorks, siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: howItWorks.hero.title,
  description: howItWorks.hero.subtitle
};

export default function HowItWorksPage() {
  return (
    <div>
      <section className="bg-surface">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              How it works
            </p>
            <h1 className="text-4xl font-semibold text-ink sm:text-5xl">
              {howItWorks.hero.title}
            </h1>
            <p className="text-lg text-muted">{howItWorks.hero.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/pricing"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
              >
                View pricing
              </Link>
              <Link
                href="/scan"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold"
              >
                Start with the scan
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-ink">What you get in 30 days</h2>
              <ul className="space-y-3 text-sm text-muted">
                {howItWorks.outputs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-ink">The 4-week sprint</h2>
            <p className="text-muted">
              A focused, repeatable delivery motion that keeps everyone aligned and
              shipping fast.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {howItWorks.timeline.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="container grid gap-10 text-white lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Inputs we need</h2>
            <p className="text-slate-300">
              We keep prep light. If you can share the workflow and define success, we
              can get moving.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {howItWorks.inputs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Outputs you receive</h2>
            <p className="text-slate-300">
              A clear handoff, visibility into results, and a system your team can run.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {howItWorks.outputs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Security
            </p>
            <h2 className="text-3xl font-semibold text-ink">
              Built for modern compliance expectations
            </h2>
            <p className="text-muted">
              We treat security as a product requirement, not an afterthought. Every
              sprint includes review with your stakeholders.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="space-y-3 text-sm text-muted">
              {howItWorks.security.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              {siteContent.site.security.title}
            </p>
            <h2 className="text-3xl font-semibold text-ink">Security & data handling</h2>
            <p className="text-muted">{siteContent.site.security.microcopy}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="space-y-3 text-sm text-muted">
              {siteContent.site.security.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Testing before deployment
            </p>
            <h2 className="text-2xl font-semibold text-ink">
              Simulation runs + acceptance criteria before launch.
            </h2>
            <p className="text-muted">
              We validate on test batches, agree on quality thresholds, and only move to
              production once operators sign off.
            </p>
          </div>
          <div className="space-y-3 text-sm text-muted">
            <p>• Dry-run simulations against historical tickets or workflows.</p>
            <p>• Human review of edge cases and escalation paths.</p>
            <p>• Success criteria documented before rollout.</p>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm md:flex-row md:items-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-ink">{howItWorks.cta.title}</h2>
            <p className="text-muted">{howItWorks.cta.description}</p>
          </div>
          <Link
            href="/scan"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
          >
            {howItWorks.cta.action}
          </Link>
        </div>
      </section>
    </div>
  );
}
