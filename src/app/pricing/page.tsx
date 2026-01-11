import type { Metadata } from "next";
import Link from "next/link";

import { HeroBackdrop } from "@/components/HeroBackdrop";
import FAQ from "@/components/site/FAQ";
import { ROICalculator } from "@/components/site/ROICalculator";
import { pricing, pricingFaq, siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: pricing.hero.title,
  description: pricing.hero.subtitle
};

export default function PricingPage() {
  return (
    <main className="aio-page" style={{ position: "relative" }}>
      <section
        className="aio-section aio-section--dark"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <HeroBackdrop />
        <div className="aio-container text-center" style={{ position: "relative", zIndex: 1 }}>
          <p className="aio-badge">Pricing</p>
          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">{pricing.hero.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[rgba(var(--aio-text),.72)]">
            {pricing.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="aio-section aio-section--light">
        <div className="aio-container aio-pricing-grid">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className={[
                "aio-card aio-card--light aio-card-hover aio-pricing-card flex h-full flex-col",
                tier.name === "Sprint + Optimization" ? "aio-pricing-featured" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-[rgba(var(--aio-ink),.92)]">
                  {tier.name}
                </h2>
                <div className="aio-pricing-price">
                  <span className="aio-price">{tier.price}</span>
                  <span className="aio-price-term">{tier.cadence}</span>
                </div>
                <p className="text-sm text-[rgba(var(--aio-ink),.7)]">{tier.description}</p>
              </div>
              <ul className="aio-list aio-list--light mt-6 text-sm">
                {tier.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                href="/scan"
                className="aio-btn aio-btn--primary mt-6 w-fit text-xs uppercase tracking-[0.2em]"
              >
                Start the scan
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="aio-section aio-section--light">
        <div className="aio-container grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgba(var(--aio-ink),.6)]">
              ROI calculator
            </p>
            <h2 className="text-3xl font-semibold">Estimate the opportunity before you commit.</h2>
            <p className="text-[rgba(var(--aio-ink),.7)]">
              Input your workflow volume to preview the value range of a 30-day sprint.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      <section className="aio-section aio-section--dark">
        <div className="aio-container grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">What is included</h2>
            <ul className="aio-list text-sm">
              {pricing.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">What is not included</h2>
            <ul className="aio-list text-sm">
              {pricing.notIncluded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="aio-section aio-section--light">
        <div className="aio-container grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="aio-card aio-card--light p-8">
            <h2 className="text-2xl font-semibold">{pricing.riskReversal.title}</h2>
            <p className="mt-3 text-[rgba(var(--aio-ink),.7)]">
              {pricing.riskReversal.description}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Still deciding?</h3>
            <p className="text-[rgba(var(--aio-ink),.7)]">
              We will map ROI before you commit. If the opportunity is not compelling,
              we will tell you.
            </p>
            <Link
              href="/scan"
              className="aio-btn aio-btn--secondary"
            >
              Book the Opportunity Scan
            </Link>
          </div>
        </div>
      </section>

      <section className="aio-section aio-section--light">
        <div className="aio-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgba(var(--aio-ink),.6)]">
              Pricing FAQ
            </p>
            <h2 className="text-3xl font-semibold">Questions before you commit</h2>
            <p className="text-[rgba(var(--aio-ink),.7)]">
              Quick answers on scope, timelines, and how we work with your team.
            </p>
          </div>
          <div>
            <FAQ items={pricingFaq} />
          </div>
        </div>
      </section>

      <section className="aio-section aio-section--light">
        <div className="aio-container aio-card aio-card--light p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgba(var(--aio-ink),.6)]">
                {siteContent.site.partners.title}
              </p>
              <ul className="aio-list aio-list--light text-sm">
                {siteContent.site.partners.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
            <Link
              href={siteContent.site.partners.ctaHref}
              className="aio-btn aio-btn--secondary w-fit"
            >
              {siteContent.site.partners.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
