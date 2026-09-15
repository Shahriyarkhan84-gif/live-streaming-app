export default function HomePage(): React.ReactElement {
  const liveChatMessages = [
    'User: Hello!',
    'User2: Amazing stream',
    'User3: 😂😂',
  ];

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col border-x border-neutral-800 bg-neutral-950 px-4 py-5">
      <header className="mb-8 flex items-center justify-between text-sm">
        <span className="font-semibold text-neutral-100">← Creator</span>
        <span className="font-medium text-neutral-200">👥 12.4K</span>
      </header>

      <section className="flex-1">
        <div className="mb-20 flex h-48 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/50 text-lg font-semibold uppercase tracking-[0.18em] text-neutral-200">
          Live Video
        </div>

        <div className="space-y-5">
          <p className="text-2xl text-neutral-100">❤️ ❤️ 💎 ⭐</p>

          <ul className="space-y-2 text-sm text-neutral-200">
            {liveChatMessages.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>

          <div className="flex items-center justify-between rounded-full border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-400">
            <span>Say something...</span>
            <span aria-label="gift" role="img">
              🎁
            </span>
          </div>

          <div className="flex items-center justify-between pt-2 text-sm font-medium text-neutral-100">
            <span>❤️ Follow</span>
            <span>🎁 Gift</span>
            <span>🔗 Share</span>
          </div>
        </div>
      </section>
    </main>
  );
}
