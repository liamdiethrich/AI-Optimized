import type { Metadata } from "next";

import { Badge } from "../components/site/Badge";
import { ButtonLink } from "../components/site/ButtonLink";
import { Section } from "../components/site/Section";
import { homeCopy, siteContent } from "../content/site";

export const metadata: Metadata = {
  title: siteContent.site.name,
  description: siteContent.site.description
};

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Section className="pt-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <div className="space-y-6">
            <Badge>{homeCopy.hero.eyebrow}</Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                {homeCopy.hero.title}
              </h1>
              <p className="max-w-2xl text-lg text-slate-600">
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
          <div className="grid gap-6 rounded-2xl border border-slate-200/60 bg-slate-50/70 p-8 md:grid-cols-3">
            {homeCopy.bullets.items.map((item) => (
              <div key={item.title} className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <Badge>{homeCopy.bullets.title}</Badge>
              <p className="max-w-2xl text-lg text-slate-700">{homeCopy.bullets.title}</p>
            </div>
          </div>
          <div className="grid gap-6 rounded-2xl bg-white p-8 shadow-sm sm:grid-cols-3">
            {homeCopy.stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id={homeCopy.freeScan.id}>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-start">
          <div className="space-y-4 lg:max-w-xl">
            <Badge>{homeCopy.freeScan.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {homeCopy.freeScan.title}
            </h2>
            <p className="text-base text-slate-600">{homeCopy.freeScan.description}</p>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm">
            {homeCopy.freeScan.checklist.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
            <ButtonLink href={homeCopy.hero.primaryCta.href}>
              {homeCopy.hero.primaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section id={homeCopy.howItWorks.id} variant="muted">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <div className="space-y-4">
            <Badge>{homeCopy.howItWorks.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {homeCopy.howItWorks.title}
            </h2>
            <p className="max-w-2xl text-base text-slate-600">
              {homeCopy.howItWorks.description}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {homeCopy.howItWorks.steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <div className="space-y-4">
            <Badge>{homeCopy.workflowTiles.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {homeCopy.workflowTiles.title}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {homeCopy.workflowTiles.tiles.map((tile) => (
              <div
                key={tile.title}
                className="rounded-2xl border border-slate-200/60 bg-slate-50/60 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">{tile.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{tile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <div className="space-y-4">
            <Badge>{homeCopy.why.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {homeCopy.why.title}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {homeCopy.why.points.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{point.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <div className="space-y-4">
            <Badge>{homeCopy.caseTemplates.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {homeCopy.caseTemplates.title}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {homeCopy.caseTemplates.templates.map((template) => (
              <div
                key={template.title}
                className="rounded-2xl border border-slate-200/60 bg-slate-50/60 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">{template.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{template.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center">
          <div className="space-y-4 lg:max-w-xl">
            <Badge>{homeCopy.pricing.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {homeCopy.pricing.title}
            </h2>
            <p className="text-base text-slate-600">{homeCopy.pricing.description}</p>
          </div>
          <div className="flex flex-1 flex-col gap-2 rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm">
            <p className="text-3xl font-semibold text-slate-900">{homeCopy.pricing.highlight}</p>
            <p className="text-sm text-slate-600">{homeCopy.pricing.note}</p>
            <ButtonLink className="mt-4" href={homeCopy.hero.primaryCta.href}>
              {homeCopy.hero.primaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <div className="space-y-4">
            <Badge>{homeCopy.faqPreview.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {homeCopy.faqPreview.title}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {homeCopy.faqPreview.items.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-200/60 bg-slate-50/60 p-6"
              >
                <h3 className="text-base font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="surface">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <Badge>{homeCopy.finalCta.eyebrow}</Badge>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {homeCopy.finalCta.title}
            </h2>
            <p className="max-w-xl text-base text-slate-600">
              {homeCopy.finalCta.description}
            </p>
          </div>
          <ButtonLink href={homeCopy.finalCta.cta.href}>{homeCopy.finalCta.cta.label}</ButtonLink>
        </div>
      </Section>
    </main>
  );
}
