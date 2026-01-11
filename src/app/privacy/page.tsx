import type { Metadata } from "next";

import { HeroBackdrop } from "@/components/HeroBackdrop";
import { siteContent } from "@/content/site";

const privacyLabel = siteContent.footer.legalLinks[0]?.label ?? "Privacy Policy";

export const metadata: Metadata = {
  title: privacyLabel,
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
          <p className="aio-badge">PRIVACY</p>
          <h1 className="mt-5 text-4xl font-semibold">Privacy Policy</h1>
          <p className="mt-3 max-w-2xl text-base text-[rgba(var(--aio-text),.72)]">
            How we handle information across our website, the Opportunity Scan, and client
            engagements.
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
              <h2>Summary</h2>
              <p>
                We collect limited information to operate this website, respond to requests,
                and deliver the Opportunity Scan and services. We do not sell personal
                information.
              </p>

              <h2>Information we collect</h2>
              <ul>
                <li>
                  Information you provide (for example: name, email, company, workflow
                  details submitted through forms).
                </li>
                <li>Communication data (messages you send us by email or through the site).</li>
                <li>
                  Basic usage data (for example: pages visited and approximate device/browser
                  information), collected via standard logs and analytics.
                </li>
              </ul>

              <h2>How we use information</h2>
              <p>We use information to:</p>
              <ul>
                <li>Provide and improve the Opportunity Scan and our services.</li>
                <li>Respond to inquiries and schedule calls.</li>
                <li>Maintain security, prevent abuse, and debug issues.</li>
                <li>Comply with legal obligations.</li>
              </ul>

              <h2>How we share information</h2>
              <p>We may share information with:</p>
              <ul>
                <li>
                  Service providers who help us operate the site (for example: hosting,
                  analytics, email).
                </li>
                <li>Professional advisors (for example: legal or accounting) where necessary.</li>
                <li>Authorities if required by law.</li>
              </ul>
              <p>We share information with your consent when you ask us to.</p>

              <h2>AI and client data</h2>
              <p>
                We use client-provided information to deliver the requested work. We do not
                use client content to train public foundation models without permission.
                Where possible, we recommend redacted or synthetic samples during discovery.
              </p>

              <h2>Data retention</h2>
              <p>
                We keep information only as long as needed for the purposes described above,
                unless a longer retention period is required by law or a written agreement.
              </p>

              <h2>Security</h2>
              <p>
                We use reasonable administrative, technical, and organizational safeguards
                designed to protect information. No method of transmission or storage is
                100% secure.
              </p>

              <h2>Your choices</h2>
              <p>
                You can request access, correction, or deletion of your information by
                contacting us. You can also opt out of non-essential communications at any
                time.
              </p>

              <h2>Contact</h2>
              <p>Questions about this policy can be sent to: hello@ai-optimized.example</p>

              <p className="aio-note">
                This policy is provided for transparency and may be updated over time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
