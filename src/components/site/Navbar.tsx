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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,10,16,.55)] backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm text-[rgba(var(--aio-text),.72)] md:flex">
          {siteContent.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={siteContent.nav.cta.href}
            className="aio-btn aio-btn--primary px-4 py-2 text-sm"
          >
            {siteContent.nav.cta.label}
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-white md:hidden"
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
          open ? "border-t border-white/10 bg-[rgba(7,10,16,.85)]" : "hidden"
        )}
      >
        <Container className="flex flex-col gap-4 py-4">
          {siteContent.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[rgba(var(--aio-text),.72)] transition hover:text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={siteContent.nav.cta.href}
            className="aio-btn aio-btn--primary w-fit px-4 py-2 text-sm"
            onClick={() => setOpen(false)}
          >
            {siteContent.nav.cta.label}
          </Link>
        </Container>
      </div>
    </header>
  );
}
