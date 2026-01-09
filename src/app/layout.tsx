import type { Metadata } from "next";
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
