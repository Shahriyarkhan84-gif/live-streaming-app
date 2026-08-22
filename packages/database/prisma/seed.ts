/**
 * Database seed script.
 *
 * Phase 0: placeholder. Real seed data (roles, demo categories, a demo
 * streamer + viewer, sample streams) is added alongside the schema in
 * Phase 1 so the app has something to render locally.
 */
async function main(): Promise<void> {
  // eslint-disable-next-line no-console
  console.log('[seed] No seed data yet — schema arrives in Phase 1.');
}

main().catch((error: unknown) => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
});
