export type SiteContent = {
  site: {
    name: string;
    tagline: string;
    description: string;
    url: string;
  };
  nav: {
    links: Array<{ label: string; href: string }>;
    cta: { label: string; href: string };
  };
  footer: {
    columns: Array<{ heading: string; links: Array<{ label: string; href: string }> }>;
    legalLinks: Array<{ label: string; href: string }>;
  };
  pages: {
    home: Record<string, string>;
    howItWorks: Record<string, string>;
    pricing: Record<string, string>;
    examples: Record<string, string>;
    contact: Record<string, string>;
  };
};

export const siteContent: SiteContent = {
  site: {
    name: "AI Optimized",
    tagline: "AI workflow optimization for busy teams.",
    description:
      "Free AI Opportunity Scan followed by a 30-day sprint delivering one measurable automation.",
    url: "https://ai-optimized.example"
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Examples", href: "/examples" },
      { label: "Contact", href: "/contact" }
    ],
    cta: {
      label: "Get the free scan",
      href: "/contact"
    }
  },
  footer: {
    columns: [
      {
        heading: "Explore",
        links: [
          { label: "How it works", href: "/how-it-works" },
          { label: "Pricing", href: "/pricing" },
          { label: "Examples", href: "/examples" }
        ]
      },
      {
        heading: "Company",
        links: [
          { label: "Contact", href: "/contact" },
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" }
        ]
      }
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" }
    ]
  },
  pages: {
    home: {
      heroTitle: "",
      heroSubtitle: ""
    },
    howItWorks: {
      intro: ""
    },
    pricing: {
      intro: ""
    },
    examples: {
      intro: ""
    },
    contact: {
      intro: ""
    }
  }
};
