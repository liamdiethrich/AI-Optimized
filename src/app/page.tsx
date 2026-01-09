import { Container } from "@/components/site/Container";

export default function HomePage() {
  return (
    <Container className="space-y-4">
      <p className="text-sm uppercase tracking-[0.3em] text-text-muted">PR1</p>
      <h1 className="text-3xl font-semibold text-text md:text-4xl">
        AI Optimized marketing site
      </h1>
      <p className="max-w-2xl text-base text-text-muted">
        Core layout, design tokens, and shared components are in place. Full content
        ships in PR2.
      </p>
    </Container>
  );
}
