import type { Metadata } from "next";

import { HeroBackdrop } from "@/components/HeroBackdrop";
import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";
import { ROICalculator } from "@/components/site/ROICalculator";
import { Section } from "@/components/site/Section";
import { homeCopy, siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: siteContent.site.name,
  description: siteContent.site.description
};

export default function HomePage() {
  return (
    <main className="aio-page flex flex-col">
      <Section className="aio-section aio-section--dark relative overflow-hidden pt-20">
        <HeroBackdrop />
        <div className="aio-container relative z-10 flex w-full flex-col gap-10">
          <div className="space-y-6">
            <Badge>{homeCopy.hero.eyebrow}</Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-[rgb(var(--aio-text))] sm:text-5xl">
                {homeCopy.hero.title}
              </h1>
              <p className="max-w-2xl text-lg text-[rgba(var(--aio-text),.72)]">
                {homeCopy.hero.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <ButtonLink href={homeCopy.hero.primaryCta.href}>
                {homeCopy.hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={homeCopy.hero.secondaryCta.href} variant="secondary">
                {homeCopy.hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
          <div className="aio-card aio-card-hover grid gap-6 p-8 md:grid-cols-3">
            {homeCopy.bullets.items.map((item) => (
              <div key={item.title} className="space-y-3">
                <h3 className="text-lg font-semibold text-[rgb(var(--aio-text))]">
                  {item.title}
                </h3>
                <p className="text-sm text-[rgba(var(--aio-text),.7)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="aio-section aio-section--light relative overflow-hidden">
        <div className="aio-section-fade-top" />
        <div className="aio-section-fade-bottom" />
        <div className="aio-container relative z-10 flex w-full flex-col gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <Badge className="aio-badge--light">{homeCopy.bullets.title}</Badge>
              <p className="max-w-2xl text-lg text-[rgba(var(--aio-ink),.7)]">
                {homeCopy.bullets.title}
              </p>
            </div>
          </div>
          <div className="aio-card aio-card--light aio-card-hover grid gap-6 p-8 sm:grid-cols-3">
            {homeCopy.stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="text-3xl font-semibold text-[rgb(var(--aio-ink))]">
                  {stat.value}
                </p>
                <p className="text-sm text-[rgba(var(--aio-ink),.68)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id={homeCopy.freeScan.id} className="aio-section aio-section--dark">
        <div className="aio-container flex w-full flex-col gap-10 lg:flex-row lg:items-start">
          <div className="space-y-4 lg:max-w-xl">
            <Badge>{homeCopy.freeScan.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold text-[rgb(var(--aio-text))] sm:text-4xl">
              {homeCopy.freeScan.title}
            </h2>
            <p className="text-base text-[rgba(var(--aio-text),.72)]">
              {homeCopy.freeScan.description}
            </p>
          </div>
          <div className="aio-card aio-card-hover flex flex-1 flex-col gap-4 p-8">
            {homeCopy.freeScan.checklist.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[rgb(var(--aio-text))]" />
                <p className="text-sm text-[rgba(var(--aio-text),.75)]">{item}</p>
              </div>
            ))}
            <ButtonLink href={homeCopy.hero.primaryCta.href}>
              {homeCopy.hero.primaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section id={homeCopy.howItWorks.id} className="aio-section aio-section--light relative overflow-hidden">
        <div className="aio-section-fade-top" />
        <div className="aio-section-fade-bottom" />
        <div className="aio-container relative z-10 flex w-full flex-col gap-10">
          <div className="space-y-4">
            <Badge className="aio-badge--light">{homeCopy.howItWorks.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold text-[rgb(var(--aio-ink))] sm:text-4xl">
              {homeCopy.howItWorks.title}
            </h2>
            <p className="max-w-2xl text-base text-[rgba(var(--aio-ink),.7)]">
              {homeCopy.howItWorks.description}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {homeCopy.howItWorks.steps.map((step, index) => (
              <div key={step.title} className="aio-card aio-card--light aio-card-hover p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[rgba(var(--aio-ink),.5)]">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[rgb(var(--aio-ink))]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[rgba(var(--aio-ink),.68)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="aio-section aio-section--dark">
        <div className="aio-container flex w-full flex-col gap-8">
          <ROICalculator />
          <ButtonLink className="w-fit" href={siteContent.nav.cta.href}>
            {siteContent.nav.cta.label}
          </ButtonLink>
        </div>
      </Section>

      <Section className="aio-section aio-section--dark">
        <div className="aio-container flex w-full flex-col gap-10">
          <div className="space-y-4">
            <Badge>{homeCopy.workflowTiles.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold text-[rgb(var(--aio-text))] sm:text-4xl">
              {homeCopy.workflowTiles.title}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {homeCopy.workflowTiles.tiles.map((tile) => (
              <div key={tile.title} className="aio-card aio-card-hover p-6">
                <h3 className="text-lg font-semibold text-[rgb(var(--aio-text))]">
                  {tile.title}
                </h3>
                <p className="mt-2 text-sm text-[rgba(var(--aio-text),.7)]">
                  {tile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="aio-section aio-section--light relative overflow-hidden">
        <div className="aio-section-fade-top" />
        <div className="aio-section-fade-bottom" />
        <div className="aio-container relative z-10 flex w-full flex-col gap-10">
          <div className="space-y-4">
            <Badge className="aio-badge--light">{homeCopy.why.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold text-[rgb(var(--aio-ink))] sm:text-4xl">
              {homeCopy.why.title}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {homeCopy.why.points.map((point) => (
              <div key={point.title} className="aio-card aio-card--light aio-card-hover p-6">
                <h3 className="text-lg font-semibold text-[rgb(var(--aio-ink))]">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-[rgba(var(--aio-ink),.68)]">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="aio-section aio-section--dark">
        <div className="aio-container flex w-full flex-col gap-10">
          <div className="space-y-4">
            <Badge>{homeCopy.caseTemplates.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold text-[rgb(var(--aio-text))] sm:text-4xl">
              {homeCopy.caseTemplates.title}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {homeCopy.caseTemplates.templates.map((template) => (
              <div key={template.title} className="aio-card aio-card-hover p-6">
                <h3 className="text-lg font-semibold text-[rgb(var(--aio-text))]">
                  {template.title}
                </h3>
                <p className="mt-2 text-sm text-[rgba(var(--aio-text),.7)]">
                  {template.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="aio-section aio-section--light relative overflow-hidden">
        <div className="aio-section-fade-top" />
        <div className="aio-section-fade-bottom" />
        <div className="aio-container relative z-10 flex w-full flex-col gap-10 lg:flex-row lg:items-center">
          <div className="space-y-4 lg:max-w-xl">
            <Badge className="aio-badge--light">{homeCopy.pricing.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold text-[rgb(var(--aio-ink))] sm:text-4xl">
              {homeCopy.pricing.title}
            </h2>
            <p className="text-base text-[rgba(var(--aio-ink),.7)]">
              {homeCopy.pricing.description}
            </p>
          </div>
          <div className="aio-card aio-card--light aio-card-hover flex flex-1 flex-col gap-2 p-8">
            <p className="text-3xl font-semibold text-[rgb(var(--aio-ink))]">
              {homeCopy.pricing.highlight}
            </p>
            <p className="text-sm text-[rgba(var(--aio-ink),.68)]">
              {homeCopy.pricing.note}
            </p>
            <ButtonLink className="mt-4" href={homeCopy.hero.primaryCta.href}>
              {homeCopy.hero.primaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section className="aio-section aio-section--dark">
        <div className="aio-container flex w-full flex-col gap-10">
          <div className="space-y-4">
            <Badge>{homeCopy.faqPreview.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold text-[rgb(var(--aio-text))] sm:text-4xl">
              {homeCopy.faqPreview.title}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {homeCopy.faqPreview.items.map((item) => (
              <div key={item.question} className="aio-card aio-card-hover p-6">
                <h3 className="text-base font-semibold text-[rgb(var(--aio-text))]">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm text-[rgba(var(--aio-text),.7)]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="aio-section aio-section--light relative overflow-hidden">
        <div className="aio-section-fade-top" />
        <div className="aio-section-fade-bottom" />
        <div className="aio-container relative z-10 flex w-full flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <Badge className="aio-badge--light">{homeCopy.finalCta.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold text-[rgb(var(--aio-ink))] sm:text-4xl">
              {homeCopy.finalCta.title}
            </h2>
            <p className="max-w-xl text-base text-[rgba(var(--aio-ink),.7)]">
              {homeCopy.finalCta.description}
            </p>
          </div>
          <ButtonLink href={homeCopy.finalCta.cta.href}>{homeCopy.finalCta.cta.label}</ButtonLink>
        </div>
      </Section>
    </main>
  );
}
