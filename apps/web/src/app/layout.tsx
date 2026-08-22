import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LiveStream Platform',
  description: 'A modern live streaming platform.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
