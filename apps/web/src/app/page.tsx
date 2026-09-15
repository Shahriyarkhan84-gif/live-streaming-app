export default function HomePage(): React.ReactElement {
  const platformSections = [
    {
      title: '1. CLIENT APPLICATIONS',
      items: ['iOS App', 'Android App', 'Web App', 'Admin Dashboard'],
    },
    {
      title: '2. USER SYSTEM',
      items: [
        'Sign Up / Login',
        'User Profile',
        'Avatar',
        'Follow / Unfollow',
        'Followers / Following',
        'Online / Offline Status',
        'Account Settings',
      ],
    },
    {
      title: '3. LIVE STREAMING SYSTEM',
      items: [
        'Create Live Room',
        'Camera',
        'Microphone',
        'Video Encoder',
        'Audio Encoder',
        'Streaming Ingest Server',
        'Live Media Server',
        'Transcoding',
        'Recording',
        'CDN',
        'Viewer Playback',
      ],
    },
    {
      title: '4. LIVE ROOM SYSTEM',
      items: [
        'Room ID',
        'Host',
        'Title',
        'Category',
        'Viewer Count',
        'Likes',
        'Comments',
        'Moderators',
        'Room Rules',
        'Room Status',
      ],
    },
    {
      title: '5. REAL-TIME SYSTEM',
      items: [
        'WebSocket Server',
        'Live Comments',
        'Likes',
        'Viewer Count',
        'Follow Events',
        'Gift Events',
        'Notifications',
        'Host / Co-host Events',
      ],
    },
    {
      title: '6. SOCIAL SYSTEM',
      items: ['Follow', 'Feed', 'Search', 'Discover', 'Recommendations', 'User Posts', 'Notifications'],
    },
    {
      title: '7. VIRTUAL CURRENCY SYSTEM',
      items: [
        'Coins',
        'Wallet',
        'Gift Store',
        'Virtual Gifts',
        'Send Gift',
        'Creator Earnings',
        'Transactions',
        'Withdrawal System',
      ],
    },
    {
      title: '8. CHAT SYSTEM',
      items: [
        'Public Live Chat',
        'Private Messages',
        'Emojis',
        'Stickers',
        'Gifts',
        'Message Filtering',
        'Block User',
        'Report User',
      ],
    },
    {
      title: '9. NOTIFICATION SYSTEM',
      items: [
        'Push Notifications',
        'New Follower',
        'Creator Goes Live',
        'Gift Received',
        'Message Received',
        'System Notifications',
      ],
    },
    {
      title: '10. MODERATION & SAFETY',
      items: [
        'User Reports',
        'Content Reports',
        'Automatic Moderation',
        'Human Moderators',
        'Banned Words',
        'Account Suspension',
        'Content Removal',
        'Anti-Spam',
        'Anti-Fraud',
      ],
    },
    {
      title: '11. BACKEND API',
      items: [
        'Authentication API',
        'User API',
        'Live API',
        'Chat API',
        'Gift API',
        'Wallet API',
        'Payment API',
        'Notification API',
        'Moderation API',
      ],
    },
    {
      title: '12. DATABASE LAYER',
      items: [
        'PostgreSQL / MySQL (Users, Profiles, Rooms, Followers, Gifts, Wallets, Transactions)',
        'Redis (Sessions, Caching, Online Users, Real-Time Data)',
        'Object Storage (Profile Images, Videos, Recordings, Other Media)',
      ],
    },
    {
      title: '13. PAYMENT SYSTEM',
      items: [
        'Payment Provider',
        'Card / Apple Pay / Google Pay',
        'Coin Purchase',
        'Payment Verification',
        'Refunds',
        'Creator Payouts',
        'Financial Records',
      ],
    },
    {
      title: '14. ADMIN DASHBOARD',
      items: [
        'Dashboard',
        'Users',
        'Live Rooms',
        'Broadcasters',
        'Moderation',
        'Reports',
        'Gifts',
        'Transactions',
        'Payments',
        'Analytics',
        'System Settings',
      ],
    },
    {
      title: '15. SECURITY',
      items: [
        'HTTPS / TLS',
        'Password Hashing',
        'JWT / Sessions',
        'Rate Limiting',
        'API Security',
        'Payment Security',
        'Fraud Detection',
        'Role-Based Access',
        'Audit Logs',
      ],
    },
    {
      title: '16. INFRASTRUCTURE',
      items: [
        'Cloud Servers',
        'Load Balancer',
        'API Servers',
        'Media Servers',
        'CDN',
        'Database Servers',
        'Redis',
        'Object Storage',
        'Monitoring',
        'Logging',
        'Backups',
        'CI/CD',
      ],
    },
  ];

  const completeRequestFlow = [
    'USER',
    '  │',
    '  ▼',
    'MOBILE / WEB APP',
    '  │',
    '  ▼',
    'API GATEWAY',
    '  │',
    '  ├──────────────► AUTH SERVICE',
    '  ├──────────────► USER SERVICE',
    '  ├──────────────► LIVE SERVICE',
    '  ├──────────────► CHAT SERVICE',
    '  ├──────────────► GIFT SERVICE',
    '  ├──────────────► WALLET SERVICE',
    '  └──────────────► NOTIFICATION SERVICE',
    '                         │',
    '                         ▼',
    '                    DATABASE',
    '                         │',
    '                         ▼',
    '                  REDIS / CACHE',
  ];

  const liveVideoFlow = [
    'BROADCASTER',
    '     │',
    '     ▼',
    'CAMERA + MICROPHONE',
    '     │',
    '     ▼',
    'VIDEO/AUDIO ENCODER',
    '     │',
    '     ▼',
    'STREAM INGEST',
    '     │',
    '     ▼',
    'MEDIA SERVER',
    '     │',
    '     ├──► TRANSCODING',
    '     ├──► RECORDING',
    '     └──► CDN',
    '             │',
    '             ▼',
    '          VIEWERS',
  ];

  const giftFlow = [
    'VIEWER',
    '  │',
    '  ▼',
    'SELECT GIFT',
    '  │',
    '  ▼',
    'BACKEND',
    '  │',
    '  ├── Check wallet',
    '  ├── Validate transaction',
    '  ├── Deduct coins',
    '  ├── Record transaction',
    '  └── Create gift event',
    '            │',
    '            ▼',
    '       REAL-TIME SERVER',
    '            │',
    '            ▼',
    '         LIVE ROOM',
    '            │',
    '            ▼',
    '      CREATOR SEES GIFT',
    '            │',
    '            ▼',
    '      CREATOR BALANCE',
  ];

  const coreArchitecture = [
    '                 ┌─────────────────────┐',
    '                 │   MOBILE / WEB APP  │',
    '                 └──────────┬──────────┘',
    '                            │',
    '                    ┌───────▼───────┐',
    '                    │   API GATEWAY  │',
    '                    └───────┬───────┘',
    '                            │',
    '       ┌────────────────────┼────────────────────┐',
    '       ▼                    ▼                    ▼',
    ' USER SERVICE        LIVE SERVICES        PAYMENT SERVICES',
    '       │                    │                    │',
    '       ▼                    ▼                    ▼',
    ' DATABASE             MEDIA SERVERS         WALLET',
    '       │                    │                    │',
    '       └────────────────────┼────────────────────┘',
    '                            ▼',
    '                     REAL-TIME SYSTEM',
    '                            │',
    '              ┌─────────────┼─────────────┐',
    '              ▼             ▼             ▼',
    '            CHAT          GIFTS        NOTIFICATIONS',
    '                            │',
    '                            ▼',
    '                           CDN',
    '                            │',
    '                            ▼',
    '                         VIEWERS',
  ];

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl bg-neutral-950 px-6 py-8">
      <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
        <h1 className="mb-6 text-2xl font-bold uppercase tracking-[0.12em] text-neutral-100">
          BIG-LIKE LIVE STREAMING PLATFORM
        </h1>

        <div className="grid gap-4 md:grid-cols-2">
          {platformSections.map((section) => (
            <article key={section.title} className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
              <h2 className="mb-2 text-sm font-semibold tracking-wide text-brand-300">{section.title}</h2>
              <ul className="space-y-1 text-sm text-neutral-300">
                {section.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          <FlowBlock title="COMPLETE REQUEST FLOW" lines={completeRequestFlow} />
          <FlowBlock title="LIVE VIDEO FLOW" lines={liveVideoFlow} />
          <FlowBlock title="GIFT FLOW" lines={giftFlow} />
          <FlowBlock title="THE CORE ARCHITECTURE" lines={coreArchitecture} />
        </div>
      </section>
    </main>
  );
}

function FlowBlock({
  title,
  lines,
}: Readonly<{ title: string; lines: string[] }>): React.ReactElement {
  return (
    <article className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
      <h2 className="mb-3 text-sm font-semibold tracking-wide text-brand-300">{title}</h2>
      <pre className="overflow-x-auto whitespace-pre text-xs leading-5 text-neutral-300">
        {lines.join('\n')}
      </pre>
    </article>
  );
}
