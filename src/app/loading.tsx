import { Container } from "@/components/site/Container";

export default function Loading() {
  return (
    <Container className="space-y-8">
      <div className="space-y-3">
        <div className="h-4 w-24 animate-pulse rounded-full bg-surface-muted" />
        <div className="h-8 w-2/3 animate-pulse rounded-xl bg-surface-muted" />
        <div className="h-4 w-full max-w-xl animate-pulse rounded-full bg-surface-muted" />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={`loading-card-${index}`}
            className="h-24 animate-pulse rounded-2xl border border-border bg-surface-muted"
          />
        ))}
      </div>
    </Container>
  );
}
