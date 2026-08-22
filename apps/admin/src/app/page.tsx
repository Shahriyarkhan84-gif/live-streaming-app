import { Button } from '@livestream/ui';

export default function AdminHomePage(): React.ReactElement {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-start justify-center gap-6 px-6">
      <span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-medium text-brand-300">
        Admin · Phase 0
      </span>
      <h1 className="text-4xl font-bold tracking-tight">Administrator Dashboard</h1>
      <p className="max-w-xl text-neutral-400">
        Separate deployable app sharing the same UI, auth, database and types
        packages as the main site. The full admin dashboard is built in Phase 11.
      </p>
      <Button variant="secondary">Open console</Button>
    </main>
  );
}
