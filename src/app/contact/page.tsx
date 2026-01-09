import { LeadForm } from "@/components/forms/LeadForm";

export default function ContactPage() {
  return (
    <div>
      <section className="bg-surface">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Contact
            </p>
            <h1 className="text-4xl font-semibold text-ink sm:text-5xl">
              Book your AI Opportunity Scan.
            </h1>
            <p className="max-w-2xl text-lg text-muted">
              Share the workflow that is slowing your team down. We will respond
              within 2 business days with next steps.
            </p>
            <div className="space-y-2 text-sm text-muted">
              <p>Tell us the systems involved and the outcome you want.</p>
              <p>No spam. Just a clear plan for your next automation.</p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <LeadForm />
          </div>
        </div>
      </section>
    </div>
  );
}
