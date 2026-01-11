import type { Metadata } from "next";

import { OpportunityScanWizard } from "@/components/forms/OpportunityScanWizard";
import { Container } from "@/components/site/Container";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: siteContent.site.scan.heroTitle,
  description: siteContent.site.scan.heroSubhead,
};

export default function ScanPage() {
  const scanCopy = siteContent.site.scan;

  return (
    <Container className="space-y-12">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-text-muted">Opportunity Scan</p>
        <h1 className="text-3xl font-semibold text-text md:text-4xl">{scanCopy.heroTitle}</h1>
        <p className="max-w-3xl text-base text-text-muted">{scanCopy.heroSubhead}</p>
      </section>

      <OpportunityScanWizard />

      <section className="rounded-3xl border border-border bg-surface-muted p-6 text-sm text-text-muted">
        No sensitive data required. Redacted examples are fine.
      </section>
    </Container>
  );
}
