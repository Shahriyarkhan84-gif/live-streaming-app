# Architecture

This document explains the system design and the trade-offs behind the major
decisions. It is kept up to date as phases land.

## Goals

Build a production-oriented live streaming platform that is **maintainable,
scalable, secure, performant, accessible, and responsive** — not a toy. The
architecture is designed so external services (video, payments, realtime
transport) can be swapped in later **without rewriting the core application**.

## High-level shape

```
                      ┌─────────────────────────────┐
   Browsers  ───────► │  apps/web (Next.js)          │
   (viewer,          │   • Viewer experience         │
    streamer)        │   • Streamer Studio (RBAC)    │
                      │   • Route Handlers = API      │
                      └───────────┬─────────────────┘
                                  │  (service layer in packages/*)
        ┌─────────────────────────┼──────────────────────────┐
        ▼                         ▼                            ▼
 ┌─────────────┐        ┌──────────────────┐        ┌──────────────────┐
 │ PostgreSQL  │        │ services/realtime │        │ StreamingProvider │
 │  (Prisma)   │        │  WebSocket + Redis│        │  (mock → vendor)  │
 └─────────────┘        └──────────────────┘        └──────────────────┘
        ▲
   apps/admin (Next.js) — administrator dashboard, shares packages
```

## Key decisions & trade-offs

### Monorepo: pnpm workspaces + Turborepo
pnpm gives strict, content-addressed installs (no phantom dependencies) and
fast disk usage; Turborepo gives cached, parallel task running across apps and
packages. **Alternative considered:** Nx — more capable but heavier and more
opinionated than this project needs.

### Two apps, not four
The spec suggested `web`, `api`, `admin`, `streamer-studio`. We deliberately
ship **`web`** (viewer + streamer studio behind role-gated route groups) and
**`admin`** as the two deployable apps.

- A standalone `api` app is unnecessary: Next.js Route Handlers already give us
  first-class API endpoints co-located with the app, and **all business logic
  lives in `packages/*`** so it is reusable and framework-independent.
- `streamer-studio` as its own app would duplicate the entire auth/session
  layer. Instead studio lives in its own route group (`/studio`) with its own
  navigation, so it *can* be extracted into a separate app later with minimal
  churn if scale demands it.

### API: Route Handlers + service layer + Zod
Endpoints are thin. They validate input with **Zod** at the boundary, call into
service functions in `packages/*`, and return a consistent response envelope
(`ApiResult<T>` in `@livestream/types`). **Permissions are always checked
server-side** — a client-supplied role is never trusted.

### Realtime as a separate service
Live chat and viewer presence run in **`services/realtime`**, a standalone
Node + `ws` process — *not* inside Next.js. This lets chat scale horizontally
independently of page rendering. It starts with an in-memory pub/sub and moves
behind a **Redis adapter** (same interface) for multi-instance fan-out. This is
the "design chat so it can scale independently" requirement.

### Video: provider abstraction first
The app depends only on the `StreamingProvider` interface
(`packages/streaming`): `createStream`, `startStream`, `stopStream`,
`getStreamStatus`, `getPlaybackUrl`, `getStreamHealth`, `createRecording`,
`deleteStream`. A **MockProvider** simulates the RTMP/SRT ingest → processing →
HLS/WebRTC playback pipeline locally so the platform runs with **zero API
keys**. Real vendors (Livepeer, Mux, Cloudflare Stream, or self-hosted
MediaMTX/OvenMediaEngine) implement the same interface later. We do **not**
build a global video CDN ourselves.

### Payments: provider abstraction + mock
Same pattern as video. `PaymentProvider` (`packages/payments`) hides the vendor
(Stripe, etc.) behind an interface with a mock implementation, so subscriptions,
tips, fees, and payouts can be developed locally without a paid account.

### Auth: Auth.js (NextAuth v5) + RBAC
Auth.js with the Prisma adapter handles sessions and (later) OAuth providers.
On top of it, `packages/auth` owns the **role/permission model** (VIEWER,
STREAMER, MODERATOR, ADMINISTRATOR) and server-side guards used by API routes
and server components.

### Database: PostgreSQL + Prisma
A single relational database with proper foreign keys, indexes, timestamps, and
constraints. Prisma was chosen (over Drizzle) for its migration workflow and
type generation across a large (~20-model) schema. All access flows through
`packages/database` — no app talks to Postgres directly.

## Cross-cutting principles

- **Business logic is separate from UI** and lives in `packages/*`.
- **Strong types everywhere**; `any` avoided unless truly unavoidable.
- **No duplicated UI** — one shared `@livestream/ui` library.
- **Security is server-side**: validation, authz, rate limiting, audit logging.
- **Incremental delivery** — one phase at a time, each runnable and tested.

## Environments & secrets

Every integration is behind an interface with a mock default and an
`.env.example` entry. Secrets are never hard-coded. Local development requires
no paid services.
