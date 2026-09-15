export default function HomePage(): React.ReactElement {
  const discoverySections = [
    {
      title: '🔥 Trending Now',
      items: ['Most watched streams', 'Fast-growing creators', 'Trending topics'],
    },
    {
      title: '⚡ Rising Creators',
      items: [
        'Smaller creators getting rapid engagement',
        '“Rising” score',
      ],
    },
    {
      title: '🎯 For You',
      items: [
        'Watch time',
        'Followed creators',
        'Categories',
        'Likes',
        'Chat participation',
      ],
    },
    {
      title: '🌍 Live Around You',
      items: ['Optional location-based discovery', 'Privacy-controlled'],
    },
    {
      title: '🏆 Events',
      items: [
        'Platform competitions',
        'Creator battles',
        'Talent competitions',
        'Seasonal events',
      ],
    },
  ];

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl bg-neutral-950 px-6 py-8">
      <header className="mb-8">
        <p className="text-sm font-medium text-brand-300">Home / Discovery</p>
        <h1 className="mt-2 text-3xl font-bold text-neutral-100">
          Intelligent stream discovery
        </h1>
      </header>

      <section className="space-y-4">
        {discoverySections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5"
          >
            <h2 className="mb-3 text-lg font-semibold text-neutral-100">
              {section.title}
            </h2>
            <ul className="space-y-2 text-sm text-neutral-300">
              {section.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
