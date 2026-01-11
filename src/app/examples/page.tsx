import type { Metadata } from "next";

import { HeroBackdrop } from "@/components/HeroBackdrop";
import { Container } from "@/components/site/Container";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: siteContent.pages.examples.title,
  description: siteContent.pages.examples.subtitle
};

export default function Page() {
  const { examples } = siteContent.pages;
  const outcomes = siteContent.site.outcomes;

  return (
    <main className="aio-page aio-section aio-section--dark" style={{ position: "relative" }}>
      <HeroBackdrop />
      <Container className="aio-container relative z-10 space-y-16">
        <section className="space-y-4">
          <p className="aio-badge">{examples.eyebrow}</p>
          <h1 className="text-3xl font-semibold text-[rgb(var(--aio-text))] md:text-4xl">
            {examples.title}
          </h1>
          <p className="max-w-3xl text-base text-[rgba(var(--aio-text),.72)]">
            {examples.subtitle}
          </p>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-[rgb(var(--aio-text))]">
              {examples.caseStudiesTitle}
            </h2>
            <p className="max-w-3xl text-[rgba(var(--aio-text),.7)]">
              {examples.caseStudiesSubtitle}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {examples.caseStudyTemplates.map((study) => (
              <div key={study.title} className="aio-card aio-card-hover flex h-full flex-col gap-4 p-6">
                <div className="space-y-2">
                  <p className="aio-chip">{study.client}</p>
                  <h3 className="text-xl font-semibold text-[rgb(var(--aio-text))]">
                    {study.title}
                  </h3>
                  <p className="text-sm text-[rgba(var(--aio-text),.7)]">{study.summary}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[rgba(var(--aio-text),.9)]">
                    Deliverables
                  </p>
                  <ul className="aio-list text-sm">
                    {study.deliverables.map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto space-y-2">
                  <p className="text-sm font-semibold text-[rgba(var(--aio-text),.9)]">
                    Results
                  </p>
                  <ul className="aio-list text-sm">
                    {study.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="aio-card space-y-6 p-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-[rgb(var(--aio-text))]">
              {outcomes.title}
            </h2>
            <p className="max-w-3xl text-[rgba(var(--aio-text),.7)]">
              Example metrics to illustrate the Outcome Layer dashboards we deliver.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.metrics.map((metric) => (
              <div key={metric.label} className="aio-metric">
                <div className="aio-metric-label">{metric.label}</div>
                <div className="aio-metric-value">{metric.value}</div>
              </div>
            ))}
          </div>
          <ul className="aio-list text-sm md:grid md:grid-cols-2 md:gap-x-6">
            {outcomes.explanationBullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-[rgb(var(--aio-text))]">
              {examples.workflowLibraryTitle}
            </h2>
            <p className="max-w-3xl text-[rgba(var(--aio-text),.7)]">
              {examples.workflowLibrarySubtitle}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {examples.workflowLibrary.map((workflow) => (
              <div key={workflow.title} className="aio-card aio-card-hover p-5">
                <h3 className="text-lg font-semibold text-[rgb(var(--aio-text))]">
                  {workflow.title}
                </h3>
                <p className="mt-2 text-sm text-[rgba(var(--aio-text),.7)]">
                  {workflow.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-[rgb(var(--aio-text))]">
              {examples.deliverableTitle}
            </h2>
            <p className="max-w-3xl text-[rgba(var(--aio-text),.7)]">
              {examples.deliverableSubtitle}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {examples.deliverableOutline.map((item) => (
              <div key={item.title} className="aio-card aio-card-hover p-4">
                <h3 className="text-base font-semibold text-[rgb(var(--aio-text))]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-[rgba(var(--aio-text),.7)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-[rgb(var(--aio-text))]">
              What your Opportunity Map includes
            </h2>
            <p className="max-w-3xl text-[rgba(var(--aio-text),.7)]">
              A 2–4 page outline you can circulate internally before the sprint begins.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {examples.sampleOpportunityMapOutline.map((item) => (
              <div key={item.title} className="aio-card aio-card-hover p-4">
                <h3 className="text-base font-semibold text-[rgb(var(--aio-text))]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-[rgba(var(--aio-text),.7)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
