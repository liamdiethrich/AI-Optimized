import type { Metadata } from "next";
import Link from "next/link";

import { HeroBackdrop } from "@/components/HeroBackdrop";

export const metadata: Metadata = {
  title: "Opportunity Scan received",
  description: "Thanks for submitting your Opportunity Scan. We will reply shortly.",
};

export default function ScanThanksPage() {
  return (
    <main className="aio-page" style={{ position: "relative" }}>
      <section
        className="aio-section aio-section--dark"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <HeroBackdrop />
        <div className="aio-container text-center" style={{ position: "relative", zIndex: 1 }}>
          <p className="aio-badge">OPPORTUNITY SCAN</p>
          <h1 className="mt-5 text-4xl font-semibold">
            Scan received. Your Opportunity Map is next.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[rgba(var(--aio-text),.72)]">
            We’ll review your workflow details and return a focused Opportunity Map with ROI
            ranges and a recommended first 30‑day sprint scope within 2 business days.
          </p>
        </div>
      </section>

      <section className="aio-section aio-section--light">
        <div className="aio-container">
          <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
            <div className="aio-card aio-card--light aio-card-hover space-y-4">
              <div>
                <h2 className="text-2xl font-semibold text-[rgba(var(--aio-ink),.92)]">
                  What happens next
                </h2>
              </div>
              <ul className="aio-list aio-list--light">
                <li>We review your workflow, stack, and constraints.</li>
                <li>We estimate time saved + cost impact (conservative range).</li>
                <li>
                  We send your Opportunity Map (ranked shortlist + ROI ranges + readiness
                  notes).
                </li>
                <li>
                  If it’s a fit, we propose a single measurable sprint outcome to ship in
                  30 days.
                </li>
              </ul>
            </div>

            <div className="aio-card aio-card--light aio-card-hover space-y-4">
              <div>
                <h2 className="text-2xl font-semibold text-[rgba(var(--aio-ink),.92)]">
                  Want to speed it up?
                </h2>
              </div>
              <ul className="aio-list aio-list--light">
                <li>Reply to the confirmation email with any links or context.</li>
                <li>Or email us directly at hello@ai-optimized.example.</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/examples" className="aio-btn aio-btn--primary">
                  View examples
                </Link>
                <Link href="/" className="aio-btn aio-btn--secondary">
                  Back to home
                </Link>
              </div>
            </div>
          </div>

          <p className="aio-note text-center">
            We don’t need sensitive data to start. Redacted samples are fine.
          </p>
        </div>
      </section>
    </main>
  );
}
