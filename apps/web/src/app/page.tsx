export default function HomePage(): React.ReactElement {
  const hostActions = [
    'Invite guests',
    'Remove guests',
    'Mute guests',
    'Promote moderator',
    'Change layouts',
    'Start a competition',
    'Start Q&A',
  ];

  const guests = [
    'Guest1',
    'Guest2',
    'Guest3',
  ];

  const participantRoles = [
    'Host',
    'Guest 1',
    'Guest 2',
    'Guest 3',
    'Audience',
    'Moderator',
  ];

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl bg-neutral-950 px-6 py-8">
      <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
        <div className="mb-8">
          <h1 className="text-xl font-bold uppercase tracking-[0.16em] text-neutral-100">
            HOST
          </h1>
          <div className="mx-auto mt-4 flex h-40 w-52 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-900 text-lg font-semibold text-neutral-200">
            VIDEO
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {guests.map((guest) => (
            <div
              key={guest}
              className="flex h-16 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-900 text-sm font-medium text-neutral-200"
            >
              {guest}
            </div>
          ))}
        </div>

        <p className="mb-6 text-center text-lg font-semibold uppercase tracking-[0.12em] text-neutral-100">
          LIVE CHAT
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.1em] text-brand-300">
              Participants
            </p>
            <ul className="space-y-1 text-sm text-neutral-300">
              {participantRoles.map((role) => (
                <li key={role}>• {role}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.1em] text-brand-300">
              The host can
            </p>
            <ul className="space-y-1 text-sm text-neutral-300">
              {hostActions.map((action) => (
                <li key={action}>• {action}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
