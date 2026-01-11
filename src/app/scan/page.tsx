import type { Metadata } from "next";

import { HeroBackdrop } from "@/components/HeroBackdrop";
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
    <main className="aio-page aio-section aio-section--dark" style={{ position: "relative" }}>
      <HeroBackdrop />
      <Container className="aio-container relative z-10 space-y-12">
        <section className="space-y-4">
          <p className="aio-badge">Opportunity Scan</p>
          <h1 className="text-3xl font-semibold text-[rgb(var(--aio-text))] md:text-4xl">
            {scanCopy.heroTitle}
          </h1>
          <p className="max-w-3xl text-base text-[rgba(var(--aio-text),.72)]">
            {scanCopy.heroSubhead}
          </p>
        </section>

        <OpportunityScanWizard />

        <section className="aio-card p-6 text-sm text-[rgba(var(--aio-text),.7)]">
          No sensitive data required. Redacted examples are fine.
        </section>
      </Container>
    </main>
  );
}
