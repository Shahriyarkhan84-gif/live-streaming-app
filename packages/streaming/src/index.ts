/**
 * @livestream/streaming
 *
 * Video-provider abstraction. Exports the StreamingProvider contract now;
 * the MockProvider and a provider factory (selected via the
 * STREAMING_PROVIDER env var) are implemented in Phase 4.
 */

export * from './provider';

export const PACKAGE_NAME = '@livestream/streaming' as const;
