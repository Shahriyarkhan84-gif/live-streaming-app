export default function HomePage(): React.ReactElement {
  const discoveryCategories = [
    '🔴 Recommended',
    '🌍 Near/Trending',
    '🎮 Gaming',
    '🎵 Music',
    '💬 Chat & Social',
    '🎤 Talent',
    '😂 Entertainment',
  ];

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col border-x border-neutral-800 bg-neutral-950">
      <header className="flex items-center justify-between border-b border-neutral-800 px-4 py-4 text-sm">
        <span className="font-semibold text-red-400">🔴 LIVE</span>
        <span className="text-neutral-300">🔍 Search</span>
        <div className="flex items-center gap-3 text-lg">
          <span aria-label="notifications" role="img">
            🔔
          </span>
          <span aria-label="profile" role="img">
            👤
          </span>
        </div>
      </header>

      <section className="flex-1 px-6 py-8">
        <h1 className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-neutral-100">
          Live Stream Discovery
        </h1>

        <ul className="space-y-5 text-lg font-medium text-neutral-100">
          {discoveryCategories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </section>

      <div className="grid grid-cols-5 items-center border-t border-neutral-800 px-2 py-3 text-center text-sm text-neutral-200">
        <span>🏠 Home</span>
        <span>🔴 Live</span>
        <span>➕ Go Live</span>
        <span>💬</span>
        <span>👤</span>
      </div>
    </main>
  );
}
