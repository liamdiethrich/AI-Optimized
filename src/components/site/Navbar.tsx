"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/site/Container";
import { Logo } from "@/components/site/Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border/60 bg-surface/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm text-text-muted md:flex">
          {siteContent.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-text"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={siteContent.nav.cta.href}
            className="rounded-full bg-brand-primary px-4 py-2 text-sm font-medium text-white shadow-lg shadow-brand-primary/40 transition hover:bg-brand-primary/90"
          >
            {siteContent.nav.cta.label}
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border/60 bg-surface-muted p-2 text-text md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>
      <div
        className={cn(
          "md:hidden",
          open ? "border-t border-border/60 bg-surface" : "hidden"
        )}
      >
        <Container className="flex flex-col gap-4 py-4">
          {siteContent.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition hover:text-text"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={siteContent.nav.cta.href}
            className="inline-flex w-fit rounded-full bg-brand-primary px-4 py-2 text-sm font-medium text-white shadow-lg shadow-brand-primary/40"
            onClick={() => setOpen(false)}
          >
            {siteContent.nav.cta.label}
          </Link>
        </Container>
      </div>
    </header>
  );
}
