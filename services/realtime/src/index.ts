/**
 * Realtime service — standalone WebSocket server for live chat and viewer
 * presence/counts. Runs as its own process so it can be scaled horizontally
 * (behind a Redis pub/sub adapter) independently of the Next.js apps.
 *
 * Phase 0: process shell only. The `ws` server, connection auth, chat
 * message handling, moderation, slow mode, and rate limiting are
 * implemented in Phase 8.
 */

const PORT = Number(process.env.REALTIME_PORT ?? 4000);

function main(): void {
  // eslint-disable-next-line no-console
  console.log(
    `[realtime] Service shell ready (would bind :${PORT}). ` +
      'WebSocket server implemented in Phase 8.',
  );
}

main();
