import Link from "next/link";
import { siteContent } from "@/content/site";
import { Container } from "@/components/site/Container";
import { Logo } from "@/components/site/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <Container className="grid gap-10 py-12 md:grid-cols-[auto_1fr]">
        <div className="space-y-4">
          <Logo variant="mark" />
          <p className="max-w-xs text-sm text-text-muted">
            {siteContent.site.description}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {siteContent.footer.columns.map((column) => (
            <div key={column.heading} className="space-y-3">
              <p className="text-sm font-semibold text-text">{column.heading}</p>
              <ul className="space-y-2 text-sm text-text-muted">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-text">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <div className="border-t border-border/60">
        <Container className="flex flex-col items-start justify-between gap-4 py-6 text-xs text-text-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {siteContent.site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            {siteContent.footer.legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-text">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
