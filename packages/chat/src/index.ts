/**
 * @livestream/chat
 *
 * Shared chat domain logic and wire protocol used by both the realtime
 * WebSocket service (services/realtime) and the web client. Keeping the
 * message contracts here lets chat scale independently of the main app.
 *
 * Will define: client<->server message types, moderation actions
 * (delete, timeout, ban), slow-mode + rate-limit rules, and a pub/sub
 * adapter interface (in-memory now, Redis later).
 *
 * Phase 0: package shell only. Implemented in Phase 8.
 */

export const PACKAGE_NAME = '@livestream/chat' as const;
