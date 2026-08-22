# Delivery Roadmap

The platform is built **one phase at a time**. Each phase must be runnable and
tested before the next begins. No feature is marked done until it has actually
been run.

| Phase | Title | Status |
| --- | --- | --- |
| 0 | Architecture & project setup | ✅ Complete |
| 1 | Database & core types | ⬜ Not started |
| 2 | Authentication & roles (RBAC) | ⬜ Not started |
| 3 | User profiles | ⬜ Not started |
| 4 | Streaming provider abstraction + mock provider | ⬜ Not started |
| 5 | Streamer Studio | ⬜ Not started |
| 6 | Viewer experience | ⬜ Not started |
| 7 | Real streaming integration | ⬜ Not started |
| 8 | Realtime chat | ⬜ Not started |
| 9 | Following & notifications | ⬜ Not started |
| 10 | Moderation | ⬜ Not started |
| 11 | Admin dashboard | ⬜ Not started |
| 12 | Subscriptions & payments | ⬜ Not started |
| 13 | Analytics | ⬜ Not started |
| 14 | Security hardening | ⬜ Not started |
| 15 | Testing | ⬜ Not started |
| 16 | Production deployment | ⬜ Not started |

## Phase 0 — what shipped

- pnpm + Turborepo monorepo with strict TypeScript, ESLint (flat config),
  Prettier, EditorConfig.
- `packages/config` — shared tsconfig + ESLint presets consumed everywhere.
- `packages/{types,database,auth,ui,streaming,chat,payments}` scaffolded with
  workspace wiring. `streaming` already defines the full `StreamingProvider`
  contract; `ui` ships the `cn` helper, a shared Tailwind preset, and a
  foundational `Button` to prove the shared-UI pipeline end to end.
- `apps/web` and `apps/admin` — Next.js App Router apps consuming the shared
  packages via `transpilePackages`, styled with the shared Tailwind preset.
- `services/realtime` — standalone WebSocket service shell.
- `docker-compose.yml` — local Postgres + Redis.
- `.env.example` — every integration defaults to mock/local; no keys required.
- Docs: this roadmap + `ARCHITECTURE.md`.

## Phase 1 — next up (Database & core types)

- Design the full Prisma schema: User, Profile, Role, Stream, StreamSession,
  StreamCategory, StreamViewer, StreamMessage, Follow, Notification, Report,
  Ban, Timeout, Moderator, Recording, Subscription, Payment, Tip, Payout,
  AuditLog — with foreign keys, indexes, timestamps, and constraints.
- Generate the Prisma client and export it from `@livestream/database`.
- Author the matching domain types/DTOs in `@livestream/types`.
- Seed script with roles, demo categories, and demo users/streams.
- Run migrations against local Postgres and verify with Prisma Studio.
