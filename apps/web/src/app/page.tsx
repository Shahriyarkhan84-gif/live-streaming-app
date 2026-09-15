export default function HomePage(): React.ReactElement {
  const steps = [
    'I build the app',
    'You get the project',
    'Open it in Expo',
    'Scan QR code with iPhone',
    '📱 Your app opens',
  ];

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center bg-neutral-950 px-6 py-8">
      <section className="w-full max-w-xl rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
        <h1 className="mb-6 text-center text-xl font-bold uppercase tracking-[0.14em] text-neutral-100">
          Expo Launch Flow
        </h1>
        <div className="space-y-2 text-center text-lg text-neutral-200">
          {steps.map((step, index) => (
            <div key={step}>
              <p>{step}</p>
              {index < steps.length - 1 ? <p className="text-neutral-500">↓</p> : null}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
