import type { Metadata } from "next";
import Link from "next/link";

import FAQ from "@/components/site/FAQ";
import { ROICalculator } from "@/components/site/ROICalculator";
import { pricing, pricingFaq, siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: pricing.hero.title,
  description: pricing.hero.subtitle
};

export default function PricingPage() {
  return (
    <div>
      <section className="bg-surface">
        <div className="container space-y-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Pricing
          </p>
          <h1 className="text-4xl font-semibold text-ink sm:text-5xl">
            {pricing.hero.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted">{pricing.hero.subtitle}</p>
        </div>
      </section>

      <section>
        <div className="container grid gap-6 lg:grid-cols-3">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-ink">{tier.name}</h2>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-ink">{tier.price}</span>
                  <span className="text-sm text-muted">{tier.cadence}</span>
                </div>
                <p className="text-sm text-muted">{tier.description}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-muted">
                {tier.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/scan"
                className="mt-6 inline-flex w-fit rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
              >
                Start the scan
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              ROI calculator
            </p>
            <h2 className="text-3xl font-semibold text-ink">
              Estimate the opportunity before you commit.
            </h2>
            <p className="text-muted">
              Input your workflow volume to preview the value range of a 30-day sprint.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="container grid gap-10 text-white lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">What is included</h2>
            <ul className="space-y-3 text-sm text-slate-200">
              {pricing.included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">What is not included</h2>
            <ul className="space-y-3 text-sm text-slate-200">
              {pricing.notIncluded.map((item) => (
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
        <div className="container grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">{pricing.riskReversal.title}</h2>
            <p className="mt-3 text-muted">{pricing.riskReversal.description}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-ink">Still deciding?</h3>
            <p className="text-muted">
              We will map ROI before you commit. If the opportunity is not compelling,
              we will tell you.
            </p>
            <Link
              href="/scan"
              className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold"
            >
              Book the Opportunity Scan
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Pricing FAQ
            </p>
            <h2 className="text-3xl font-semibold text-ink">Questions before you commit</h2>
            <p className="text-muted">
              Quick answers on scope, timelines, and how we work with your team.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <FAQ items={pricingFaq} />
          </div>
        </div>
      </section>

      <section>
        <div className="container rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                {siteContent.site.partners.title}
              </p>
              <ul className="space-y-2 text-sm text-muted">
                {siteContent.site.partners.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={siteContent.site.partners.ctaHref}
              className="inline-flex w-fit rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold"
            >
              {siteContent.site.partners.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
