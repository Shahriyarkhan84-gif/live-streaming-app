import { Button } from '@livestream/ui';

export default function HomePage(): React.ReactElement {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-start justify-center gap-6 px-6">
      <span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-medium text-brand-300">
        Phase 0 · Foundation
      </span>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        LiveStream Platform
      </h1>
      <p className="max-w-xl text-neutral-400">
        The monorepo foundation is in place: shared UI, database, auth, streaming
        and types packages wired through Turborepo. Features are built out one
        phase at a time from here.
      </p>
      <div className="flex gap-3">
        <Button>Get started</Button>
        <Button variant="secondary">View roadmap</Button>
      </div>
    </main>
  );
}
