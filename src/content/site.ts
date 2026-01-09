type CaseStudyTemplate = {
  title: string;
  client: string;
  summary: string;
  deliverables: string[];
  results: string[];
};

type WorkflowLibraryItem = {
  title: string;
  description: string;
};

type DeliverableOutlineItem = {
  title: string;
  description: string;
};

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
    examples: {
      eyebrow: string;
      title: string;
      subtitle: string;
      caseStudiesTitle: string;
      caseStudiesSubtitle: string;
      caseStudyTemplates: CaseStudyTemplate[];
      workflowLibraryTitle: string;
      workflowLibrarySubtitle: string;
      workflowLibrary: WorkflowLibraryItem[];
      deliverableTitle: string;
      deliverableSubtitle: string;
      deliverableOutline: DeliverableOutlineItem[];
    };
    contact: {
      eyebrow: string;
      title: string;
      subtitle: string;
      formTitle: string;
      formSubtitle: string;
      fields: {
        name: string;
        email: string;
        company: string;
        role: string;
        goals: string;
      };
      primaryCta: string;
      helperText: string;
      fallbackEmailLabel: string;
      fallbackEmail: string;
      bookingCtaLabel: string;
      bookingCtaHref: string;
      bookingCtaHeading: string;
      bookingCtaNote: string;
    };
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
      eyebrow: "Examples",
      title: "Workflow upgrades that ship in 30 days.",
      subtitle:
        "Each sprint delivers a single automation or AI assistant that removes a bottleneck, with a playbook your team can reuse.",
      caseStudiesTitle: "Case study templates",
      caseStudiesSubtitle:
        "Representative templates from recent engagements. We tailor the workflow, inputs, and dashboards to your stack.",
      caseStudyTemplates: [
        {
          title: "Revenue ops pipeline assistant",
          client: "Mid-market SaaS",
          summary:
            "Replaced manual territory handoffs with a guided intake that enriches accounts and routes deals in minutes.",
          deliverables: [
            "HubSpot + Salesforce sync blueprint",
            "Automated enrichment + routing rules",
            "Deal desk summary generator"
          ],
          results: ["42% faster lead handoffs", "2 hours saved per rep weekly"]
        },
        {
          title: "Customer success renewal cockpit",
          client: "B2B services firm",
          summary:
            "Unified renewal signals, NPS feedback, and usage notes into a single prioritization queue.",
          deliverables: [
            "Renewal health scoring model",
            "Slack briefing bot",
            "Quarterly business review template"
          ],
          results: ["18% lift in proactive outreach", "One-source renewal tracker"]
        },
        {
          title: "Operations QA monitoring suite",
          client: "Healthcare logistics",
          summary:
            "Built a compliance-ready QA workflow that summarizes incidents and flags process gaps.",
          deliverables: [
            "Incident classifier",
            "Executive dashboard",
            "Playbook for corrective actions"
          ],
          results: ["Weekly QA reporting in under 30 minutes", "Audit-ready logs"]
        }
      ],
      workflowLibraryTitle: "Workflow library",
      workflowLibrarySubtitle:
        "Modular automations we can adapt during the opportunity scan and sprint.",
      workflowLibrary: [
        {
          title: "Lead intake concierge",
          description: "Captures inbound requests, enriches accounts, and routes based on fit."
        },
        {
          title: "Client onboarding checklist",
          description: "Launches tasks, kickoff decks, and timelines across teams."
        },
        {
          title: "Meeting brief generator",
          description: "Summarizes CRM + project data before every customer call."
        },
        {
          title: "Support ticket summarizer",
          description: "Auto-tags themes, drafts responses, and escalates hot issues."
        },
        {
          title: "Weekly exec insights",
          description: "Combines KPIs, risks, and wins into a single weekly email."
        },
        {
          title: "Competitive intel tracker",
          description: "Monitors updates, press, and pricing changes with alerts."
        }
      ],
      deliverableTitle: "Sample deliverable outline",
      deliverableSubtitle:
        "A typical sprint package includes documentation, training, and a shared roadmap.",
      deliverableOutline: [
        {
          title: "Opportunity scan report",
          description: "Audit of handoffs, data gaps, and quick-win automations."
        },
        {
          title: "Workflow blueprint",
          description: "Process map, system touchpoints, and integration plan."
        },
        {
          title: "Automation build",
          description: "Configured workflows, prompt templates, and QA checklist."
        },
        {
          title: "Enablement kit",
          description: "Loom walkthroughs, SOPs, and team training session."
        },
        {
          title: "Impact scorecard",
          description: "Before/after metrics and next sprint recommendations."
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Book your AI opportunity scan.",
      subtitle:
        "Tell us about the manual work you want to remove. We will reply within two business days with next steps.",
      formTitle: "Project intake",
      formSubtitle: "Share the basics so we can scope the right automation sprint.",
      fields: {
        name: "Full name",
        email: "Work email",
        company: "Company",
        role: "Role / team",
        goals: "What should the automation solve?"
      },
      primaryCta: "Request the scan",
      helperText:
        "We will never share your details. This form does not submit yet—email us directly if you need a faster response.",
      fallbackEmailLabel: "Email us at",
      fallbackEmail: "hello@ai-optimized.example",
      bookingCtaLabel: "View booking placeholder",
      bookingCtaHref: "https://ai-optimized.example/booking-placeholder",
      bookingCtaHeading: "Prefer a calendar link?",
      bookingCtaNote: "Grab a placeholder slot while we finalize scheduling."
    }
  }
};
