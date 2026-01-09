import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AI Optimized",
  description: "Productized AI workflow optimization."
};

const navLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="container flex items-center justify-between py-4">
              <Link href="/" className="text-lg font-semibold">
                AI Optimized
              </Link>
              <nav className="flex items-center gap-6 text-sm font-medium text-muted">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-slate-200 bg-slate-950 text-white">
            <div className="container flex flex-col gap-4 py-8 text-sm text-slate-300">
              <span className="text-base font-semibold text-white">AI Optimized</span>
              <p className="max-w-xl">
                We deliver measurable AI automation in 30 days, backed by clear outcomes
                and zero implementation drag for your team.
              </p>
              <span>© 2024 AI Optimized. All rights reserved.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
