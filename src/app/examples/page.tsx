import type { Metadata } from "next";

import { Container } from "@/components/site/Container";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: siteContent.pages.examples.title,
  description: siteContent.pages.examples.subtitle
};

export default function Page() {
  const { examples } = siteContent.pages;

  return (
    <Container className="space-y-16">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-text-muted">
          {examples.eyebrow}
        </p>
        <h1 className="text-3xl font-semibold text-text md:text-4xl">{examples.title}</h1>
        <p className="max-w-3xl text-base text-text-muted">{examples.subtitle}</p>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-text">{examples.caseStudiesTitle}</h2>
          <p className="max-w-3xl text-text-muted">{examples.caseStudiesSubtitle}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {examples.caseStudyTemplates.map((study) => (
            <div
              key={study.title}
              className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6"
            >
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                  {study.client}
                </p>
                <h3 className="text-xl font-semibold text-text">{study.title}</h3>
                <p className="text-sm text-text-muted">{study.summary}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-text">Deliverables</p>
                <ul className="space-y-1 text-sm text-text-muted">
                  {study.deliverables.map((deliverable) => (
                    <li key={deliverable}>• {deliverable}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto space-y-2">
                <p className="text-sm font-semibold text-text">Results</p>
                <ul className="space-y-1 text-sm text-text-muted">
                  {study.results.map((result) => (
                    <li key={result}>• {result}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-text">{examples.workflowLibraryTitle}</h2>
          <p className="max-w-3xl text-text-muted">{examples.workflowLibrarySubtitle}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {examples.workflowLibrary.map((workflow) => (
            <div
              key={workflow.title}
              className="rounded-2xl border border-border bg-surface-muted p-5"
            >
              <h3 className="text-lg font-semibold text-text">{workflow.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{workflow.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-border bg-surface p-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-text">{examples.deliverableTitle}</h2>
          <p className="max-w-3xl text-text-muted">{examples.deliverableSubtitle}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {examples.deliverableOutline.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-background p-4">
              <h3 className="text-base font-semibold text-text">{item.title}</h3>
              <p className="mt-1 text-sm text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
