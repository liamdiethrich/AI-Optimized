import type { Metadata } from "next";

import { HeroBackdrop } from "@/components/HeroBackdrop";
import { siteContent } from "@/content/site";

const termsLabel = siteContent.footer.legalLinks[1]?.label ?? "Terms of Service";

export const metadata: Metadata = {
  title: termsLabel,
  description: siteContent.site.tagline
};

export default function Page() {
  return (
    <main className="aio-page" style={{ position: "relative" }}>
      <section
        className="aio-section aio-section--dark"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <HeroBackdrop />
        <div className="aio-container" style={{ position: "relative", zIndex: 1 }}>
          <p className="aio-badge">TERMS</p>
          <h1 className="mt-5 text-4xl font-semibold">Terms of Service</h1>
          <p className="mt-3 max-w-2xl text-base text-[rgba(var(--aio-text),.72)]">
            Terms for use of this website. Client service engagements are governed by a
            separate written agreement.
          </p>
          <p className="mt-2 text-sm text-[rgba(var(--aio-text),.6)]">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="aio-section aio-section--light">
        <div className="aio-container">
          <div className="aio-card aio-card--light aio-legal-card">
            <div className="aio-prose">
              <h2>Acceptance of terms</h2>
              <p>By accessing or using this website, you agree to these Terms.</p>

              <h2>Use of the website</h2>
              <p>
                You agree not to misuse the site, attempt unauthorized access, or interfere
                with normal operation.
              </p>

              <h2>No professional advice</h2>
              <p>
                Information on this site is provided for general informational purposes and
                does not constitute legal, financial, or other professional advice.
              </p>

              <h2>Services and agreements</h2>
              <p>
                Any paid engagement (including delivery sprints, optimization support, or
                partner arrangements) is governed by a separate written agreement. If there
                is a conflict between these Terms and a signed agreement, the signed
                agreement controls.
              </p>

              <h2>Intellectual property</h2>
              <p>
                All website content, branding, and materials are owned by AI Optimized or
                its licensors and may not be copied or redistributed without permission.
              </p>

              <h2>Third‑party links</h2>
              <p>
                This site may reference third‑party websites. We are not responsible for
                their content or practices.
              </p>

              <h2>Disclaimers</h2>
              <p>
                The site is provided “as is” without warranties of any kind, to the maximum
                extent permitted by law.
              </p>

              <h2>Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, AI Optimized will not be liable for
                indirect, incidental, special, consequential, or punitive damages arising
                from your use of the site.
              </p>

              <h2>Contact</h2>
              <p>Questions about these Terms can be sent to: hello@ai-optimized.example</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
