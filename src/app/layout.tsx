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
import type { Metadata } from "next";

import { site } from "../content/site";

const metadataBaseUrl = site.url ? site.url : "https://example.com";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(metadataBaseUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        {children}
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { siteContent } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  title: siteContent.site.name,
  description: siteContent.site.description,
  metadataBase: new URL(siteContent.site.url)
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${sora.variable} font-body bg-background text-text`}>
        <div className="flex min-h-screen flex-col bg-background">
          <Navbar />
          <main className="flex-1 py-12">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
