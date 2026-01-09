import Link from "next/link";

import { Container } from "@/components/site/Container";
import { Logo } from "@/components/site/Logo";

export default function NotFound() {
  return (
    <Container className="relative flex min-h-[60vh] flex-col items-start justify-center gap-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-end pr-6 opacity-10">
        <Logo variant="mark" className="h-32 w-32" />
      </div>
      <p className="text-sm uppercase tracking-[0.3em] text-text-muted">404</p>
      <h1 className="text-3xl font-semibold text-text md:text-4xl">
        We could not find that page.
      </h1>
      <p className="max-w-xl text-base text-text-muted">
        The route may have moved, or the link you followed is outdated. Head back to the
        main site to keep exploring.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full border border-brand-accent/60 px-6 py-3 text-sm font-semibold text-brand-accent"
      >
        Return home
      </Link>
    </Container>
  );
}
