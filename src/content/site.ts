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

export const howItWorks = {
  hero: {
    title: "Your AI automation delivered in 30 days",
    subtitle:
      "We run a tight, four-week sprint that turns a high-leverage workflow into a measurable automation your team trusts."
  },
  timeline: [
    {
      title: "Week 1 · Opportunity Scan",
      description:
        "We map your highest-friction workflows, quantify ROI, and pick the one automation that moves the needle fast.",
      bullets: [
        "Stakeholder interviews and workflow audit",
        "Baseline time/cost metrics",
        "Decision-ready automation brief"
      ]
    },
    {
      title: "Week 2 · Prototype & data readiness",
      description:
        "We build the AI workflow, connect the right data sources, and validate quality with your operators.",
      bullets: [
        "Secure data access setup",
        "Workflow prototype and agent prompts",
        "Early QA with real scenarios"
      ]
    },
    {
      title: "Week 3 · Automation build",
      description:
        "We harden the automation, add guardrails, and integrate it into your existing tools.",
      bullets: [
        "System integrations + handoffs",
        "Error handling and human review",
        "Performance dashboards"
      ]
    },
    {
      title: "Week 4 · Launch & enablement",
      description:
        "We roll out to your team, document the workflow, and hand you the playbook to run it solo.",
      bullets: [
        "Training + adoption plan",
        "SOPs and documentation",
        "30-day success checklist"
      ]
    }
  ],
  inputs: [
    "Access to the workflow owners",
    "Existing tools and data sources",
    "Success metrics and constraints",
    "Security and compliance requirements"
  ],
  outputs: [
    "Production-ready AI automation",
    "ROI and performance dashboard",
    "Operator playbooks + SOPs",
    "30-day optimization roadmap"
  ],
  security: [
    "Data never used for model training",
    "Role-based access and audit logging",
    "Secure infrastructure with encryption in transit and at rest",
    "Human-in-the-loop approvals for sensitive steps"
  ],
  cta: {
    title: "Ready to pinpoint your highest-ROI AI workflow?",
    description:
      "Book a 30-minute Opportunity Scan and we will map the fastest automation win for your team.",
    action: "Book the Opportunity Scan"
  }
};

export const pricing = {
  hero: {
    title: "Simple pricing for measurable automation",
    subtitle:
      "Choose the engagement that matches your timeline. Every plan includes an AI Opportunity Scan and a 30-day delivery sprint."
  },
  tiers: [
    {
      name: "Sprint",
      price: "$12,500",
      cadence: "one-time",
      description:
        "Best for teams shipping their first AI automation with hands-on delivery and enablement.",
      highlights: [
        "One automation delivered in 30 days",
        "Workflow documentation + SOPs",
        "Team training session",
        "ROI scorecard"
      ]
    },
    {
      name: "Sprint + Optimization",
      price: "$18,500",
      cadence: "one-time",
      description:
        "Ideal for teams that want measurement, tuning, and adoption support after launch.",
      highlights: [
        "Everything in Sprint",
        "30-day performance tuning",
        "Prompt + guardrail refinements",
        "Leadership summary report"
      ]
    },
    {
      name: "Quarterly Partner",
      price: "$30,000",
      cadence: "per quarter",
      description:
        "For leaders who want a pipeline of AI workflows with predictable delivery every quarter.",
      highlights: [
        "Two automations per quarter",
        "Dedicated operator enablement",
        "Executive roadmap sessions",
        "Priority support"
      ]
    }
  ],
  included: [
    "AI Opportunity Scan with ROI estimates",
    "Workflow integration with your stack",
    "Security review and compliance alignment",
    "Knowledge transfer and documentation",
    "Measured success metrics"
  ],
  notIncluded: [
    "Ongoing infrastructure hosting fees",
    "Net-new data warehouse builds",
    "Large-scale change management programs",
    "Custom mobile or front-end product builds"
  ],
  riskReversal: {
    title: "Ship value fast or we keep working",
    description:
      "If the automation is not delivered and adopted by day 30, we stay engaged at no cost until the workflow is live and your team is trained."
  }
};

export const pricingFaq = [
  {
    question: "How quickly can we start?",
    answer:
      "Most teams kick off within two weeks. We schedule a discovery call, confirm scope, and begin the Opportunity Scan immediately."
  },
  {
    question: "Can you work with our existing tools?",
    answer:
      "Yes. We prioritize integrations with your current stack so teams do not have to change tools to adopt the automation."
  },
  {
    question: "What happens after the 30-day sprint?",
    answer:
      "You receive playbooks, documentation, and training. If you want continuous optimization, the Optimization or Quarterly Partner plans cover that support."
  },
  {
    question: "Do you support compliance-heavy industries?",
    answer:
      "We build in human approvals, audit logging, and data handling rules so the automation meets security and compliance standards."
  }
];

export const faq = [
  {
    question: "What kinds of workflows are a fit?",
    answer:
      "We focus on repeatable processes with clear inputs and outputs—think reporting, handoffs, document processing, and operational checklists."
  },
  {
    question: "Will my team need to learn new tools?",
    answer:
      "No. We integrate with the systems you already use and deliver a clear runbook so operators can run the workflow immediately."
  },
  {
    question: "How do you measure success?",
    answer:
      "We define success metrics in week one and track time saved, error reduction, and throughput improvements across the sprint."
  },
  {
    question: "Do you replace my team?",
    answer:
      "Absolutely not. The goal is to reduce busywork so your team can focus on higher-value tasks and decision-making."
  },
  {
    question: "What if we need more than one automation?",
    answer:
      "We can stack sprints or use the Quarterly Partner plan to keep a steady pipeline of workflow improvements."
  }
];
export const site = {
  name: "AI Optimized",
  url: "https://ai-optimized.example.com",
  description:
    "Productized AI workflow optimization for modern ops teams. Get a free AI Opportunity Scan and ship a measurable automation in 30 days.",
} as const;

export const homeCopy = {
  hero: {
    eyebrow: "AI Opportunity Scan",
    title: "Turn manual workflows into measurable automation in 30 days.",
    subtitle:
      "We map your highest-friction processes, design the right AI-assisted workflow, and deliver a production-ready automation with a clear ROI story.",
    primaryCta: {
      label: "Book a free scan",
      href: "#free-scan",
    },
    secondaryCta: {
      label: "See how it works",
      href: "#how-it-works",
    },
  },
  bullets: {
    title: "Built for lean teams that need impact fast.",
    items: [
      {
        title: "Pinpoint the highest-leverage workflow",
        description:
          "Rapid audit across your systems, handoffs, and bottlenecks to find the automation with the biggest payoff.",
      },
      {
        title: "Ship in a 30-day sprint",
        description:
          "We scope a single measurable outcome and deliver it without long-term commitments or bloated discovery.",
      },
      {
        title: "Operational-ready from day one",
        description:
          "Documentation, training, and monitoring are included so your team can run the workflow without us.",
      },
    ],
  },
  stats: [
    { value: "30 days", label: "from kickoff to production" },
    { value: "1 workflow", label: "focused on measurable ROI" },
    { value: "5x", label: "average task time reduction" },
  ],
  freeScan: {
    id: "free-scan",
    eyebrow: "Free AI Opportunity Scan",
    title: "Get a custom automation plan in one week.",
    description:
      "We review your workflows, quantify time savings, and deliver a prioritized roadmap — no commitment required.",
    checklist: [
      "Process map of your top 3 workflows",
      "ROI estimate with time and cost savings",
      "Recommendation for the first 30-day sprint",
    ],
  },
  howItWorks: {
    id: "how-it-works",
    eyebrow: "How it works",
    title: "A focused sprint from discovery to delivery.",
    description:
      "We keep the scope tight and the outcomes measurable, so you get an automation that sticks.",
    steps: [
      {
        title: "Discover",
        description:
          "Interview stakeholders, map the workflow, and define the success metric.",
      },
      {
        title: "Design",
        description:
          "Prototype the AI-assisted process and align on tooling + data requirements.",
      },
      {
        title: "Deliver",
        description:
          "Implement the workflow, train the team, and ship with monitoring in place.",
      },
    ],
  },
  workflowTiles: {
    eyebrow: "Workflow accelerators",
    title: "Common automation tracks we ship fast.",
    tiles: [
      {
        title: "Support triage",
        description:
          "Summarize inbound tickets, auto-route by sentiment, and surface priority escalations.",
      },
      {
        title: "Sales ops",
        description:
          "Clean CRM data, enrich leads, and trigger next-step playbooks automatically.",
      },
      {
        title: "Operations",
        description:
          "Automate reporting, QA checks, and cross-team handoffs with AI copilots.",
      },
      {
        title: "Marketing",
        description:
          "Generate briefs, repurpose content, and automate campaign QA across channels.",
      },
    ],
  },
  why: {
    eyebrow: "Why AI Optimized",
    title: "Strategy, implementation, and enablement in one team.",
    points: [
      {
        title: "Outcome-first scope",
        description:
          "We commit to a single measurable metric so you can prove impact quickly.",
      },
      {
        title: "Tool-agnostic expertise",
        description:
          "We integrate across your existing stack without pushing a proprietary platform.",
      },
      {
        title: "Enablement included",
        description:
          "Training, playbooks, and monitoring ensure your team owns the workflow.",
      },
    ],
  },
  caseTemplates: {
    eyebrow: "Mini case snapshots",
    title: "Proof points from similar teams.",
    templates: [
      {
        title: "RevOps team",
        outcome: "Saved 18 hours/week by automating lead enrichment and routing.",
      },
      {
        title: "Customer success",
        outcome: "Cut ticket response time by 42% with AI summarization + routing.",
      },
      {
        title: "Operations",
        outcome: "Reduced monthly reporting cycles from 3 days to 4 hours.",
      },
    ],
  },
  pricing: {
    eyebrow: "Simple pricing",
    title: "One sprint, one outcome.",
    description:
      "Flat-rate 30-day sprint includes discovery, implementation, and enablement.",
    highlight: "$12k per sprint",
    note: "Custom pricing for multi-workflow engagements.",
  },
  faqPreview: {
    eyebrow: "FAQ",
    title: "Quick answers before you book.",
    items: [
      {
        question: "What if we do not know which workflow to automate?",
        answer:
          "The free scan identifies your highest-ROI workflow and gives you a clear first sprint recommendation.",
      },
      {
        question: "Do you replace our existing tools?",
        answer:
          "No. We integrate with your current stack and recommend only what improves the workflow.",
      },
      {
        question: "How quickly do we see results?",
        answer:
          "Most teams see measurable time savings in the first two weeks of the sprint.",
      },
      {
        question: "Who owns the automation after launch?",
        answer:
          "Your team does. We provide documentation, training, and monitoring so you can run it confidently.",
      },
      {
        question: "Is this secure and compliant?",
        answer:
          "We work within your security requirements and document data flows for review.",
      },
      {
        question: "Can we do more than one workflow?",
        answer:
          "Yes. Many clients start with one sprint and then stack additional workflows.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to automate?",
    title: "Book your free AI Opportunity Scan.",
    description:
      "Get a tailored roadmap and see if a 30-day sprint is the right next step.",
    cta: {
      label: "Schedule the scan",
      href: "#free-scan",
    },
  },
} as const;
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
