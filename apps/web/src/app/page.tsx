export default function HomePage(): React.ReactElement {
  const roles = [
    'Host',
    'Guest 1',
    'Guest 2',
    'Guest 3',
    'Audience',
    'Moderator',
  ];

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md items-center justify-center bg-neutral-950 px-6 py-8">
      <section className="w-full rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
        <h1 className="mb-4 text-xl font-bold uppercase tracking-[0.16em] text-neutral-100">
          LIVE SPACE
        </h1>
        <div className="space-y-2 text-neutral-200">
          <p>│</p>
          {roles.map((role, index) => (
            <p key={role}>{index === roles.length - 1 ? '└── ' : '├── '}{role}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
