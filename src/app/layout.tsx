import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: {
    default: siteContent.site.name,
    template: `%s | ${siteContent.site.name}`
  },
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
      <body className="font-body bg-background text-text">
        <div className="flex min-h-screen flex-col bg-background">
          <Navbar />
          <main className="flex-1 py-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
