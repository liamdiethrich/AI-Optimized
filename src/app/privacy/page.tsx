import type { Metadata } from "next";

import { Container } from "@/components/site/Container";
import { siteContent } from "@/content/site";

const privacyLabel = siteContent.footer.legalLinks[0]?.label ?? "Privacy Policy";

export const metadata: Metadata = {
  title: privacyLabel,
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
