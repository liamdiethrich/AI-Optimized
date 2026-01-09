import type { Metadata } from "next";

import { Container } from "@/components/site/Container";
import { siteContent } from "@/content/site";

const termsLabel = siteContent.footer.legalLinks[1]?.label ?? "Terms of Service";

export const metadata: Metadata = {
  title: termsLabel,
  description: siteContent.site.tagline
};

export default function Page() {
  return (
    <Container className="space-y-3">
      <h1 className="text-3xl font-semibold text-text">Coming next</h1>
      <p className="text-text-muted">This page will be filled in during PR2.</p>
    </Container>
  );
}
