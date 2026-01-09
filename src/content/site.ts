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
