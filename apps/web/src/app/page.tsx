export default function HomePage(): React.ReactElement {
  const appSections = [
    {
      title: '📱 Viewer App',
      items: ['Home', 'Discover', 'Live Rooms', 'Clips', 'Following', 'Profile'],
    },
    {
      title: '🎥 Creator App',
      items: ['Go Live', 'Camera', 'Guests', 'Gifts', 'Live Chat', 'Earnings'],
    },
    {
      title: '🏆 Live Arena',
      items: ['Creator Battles', 'Events', 'Leaderboards'],
    },
    {
      title: '💬 Social',
      items: ['Following', 'Creator Clubs', 'Messages', 'Notifications'],
    },
    {
      title: '🖥 Admin',
      items: ['Users', 'Live Monitoring', 'Moderation', 'Gifts', 'Payments', 'Analytics'],
    },
  ];

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl bg-neutral-950 px-6 py-8">
      <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
        <h1 className="mb-4 text-xl font-bold uppercase tracking-[0.14em] text-neutral-100">
          YOUR STREAMING APP
        </h1>
        <p className="mb-2 text-neutral-300">│</p>
        <div className="space-y-4 text-neutral-200">
          {appSections.map((section, sectionIndex) => (
            <div key={section.title}>
              <p>{sectionIndex === appSections.length - 1 ? '└── ' : '├── '}{section.title}</p>
              <ul className="mt-1 space-y-1 pl-8 text-sm text-neutral-300">
                {section.items.map((item, itemIndex) => (
                  <li key={item}>
                    {itemIndex === section.items.length - 1 ? '└── ' : '├── '}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
