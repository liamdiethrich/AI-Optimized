import Link from "next/link";

import { HeroBackdrop } from "@/components/HeroBackdrop";
import { ButtonLink } from "@/components/site/ButtonLink";
import { Container } from "@/components/site/Container";
import { siteContent } from "@/content/site";

export default function NotFound() {
  const howItWorksHref =
    siteContent.nav.links.find((link) => link.label === "How it works")?.href ??
    "/how-it-works";

  return (
    <main className="aio-page" style={{ position: "relative" }}>
      <section className="aio-section aio-section--dark">
        <HeroBackdrop />
        <div className="aio-peak-overlay" aria-hidden="true" />
        <Container className="aio-container relative z-10">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <p className="aio-badge">404</p>
            <h1 className="mt-4 text-3xl font-semibold text-[rgb(var(--aio-text))] md:text-5xl">
              You’re off the map.
            </h1>
            <p className="mt-4 text-base text-[rgba(var(--aio-text),.72)] md:text-lg">
              The page you’re looking for doesn’t exist. Follow the north star back to a measurable
              path.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="aio-card aio-card--light aio-card-hover w-full max-w-xl space-y-6 p-6 md:p-8">
              <div className="space-y-3 text-left">
                <h2 className="text-2xl font-semibold text-[rgba(var(--aio-ink),.92)]">
                  Quick links
                </h2>
                <ul className="aio-list aio-list--light text-sm">
                  <li>
                    <Link className="aio-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="aio-link" href={howItWorksHref}>
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link className="aio-link" href="/pricing">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link className="aio-link" href="/examples">
                      Examples
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href={siteContent.nav.cta.href}>Get the free scan</ButtonLink>
                <ButtonLink href="/" variant="secondary">
                  Back to home
                </ButtonLink>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-[rgba(var(--aio-text),.6)]">
            If you think this is a bug, email{" "}
            <a className="aio-link" href="mailto:hello@ai-optimized.example">
              hello@ai-optimized.example
            </a>
            .
          </p>
        </Container>
      </section>
    </main>
  );
}
