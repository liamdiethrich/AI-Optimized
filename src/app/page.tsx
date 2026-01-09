import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container flex flex-col gap-10 py-20">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          AI Optimized
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-ink">
          Productized AI workflow optimization for busy operators.
        </h1>
        <p className="text-lg text-muted">
          Start with a free AI Opportunity Scan. We deliver one measurable automation in
          30 days and make sure your team can run it without us.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/how-it-works"
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
        >
          See how it works
        </Link>
        <Link
          href="/pricing"
          className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold"
        >
          View pricing
        </Link>
      </div>
    </div>
  );
}
