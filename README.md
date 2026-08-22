# LiveStream Platform

A modern, scalable live-streaming platform (Twitch / TikTok LIVE in concept)
with its own branding, architecture, and feature set. Built as a **pnpm +
Turborepo monorepo** with Next.js, React, TypeScript, Tailwind, PostgreSQL,
Prisma, Auth.js, and a standalone WebSocket service for realtime chat.

> **Status:** Phase 0 complete — architecture and project foundation. Features
> are built one phase at a time (see [docs/ROADMAP.md](docs/ROADMAP.md)). No
> feature is claimed to work until it has actually been run and tested.

## Requirements

- Node.js >= 20 (repo pins 22 via `.nvmrc`)
- pnpm >= 10
- Docker (for local Postgres + Redis)

## Quick start

```bash
# 1. Install dependencies
pnpm install

# 2. Start local backing services (Postgres + Redis)
docker compose up -d

# 3. Configure environment
cp .env.example .env      # defaults work out of the box for local dev

# 4. Generate the Prisma client (models arrive in Phase 1)
pnpm db:generate

# 5. Run everything (web :3000, admin :3001)
pnpm dev
```

Everything defaults to **local/mock** services — no external API keys are
required to run the app.

## Monorepo layout

```
apps/
  web/                # Viewer experience + Streamer Studio (role-gated routes)
  admin/              # Administrator dashboard (separate deployable app)
packages/
  config/             # Shared tsconfig + ESLint/Prettier presets
  types/              # Shared TypeScript types & DTOs
  database/           # Prisma schema, migrations, shared client
  auth/               # Auth.js (NextAuth v5) config + RBAC
  ui/                 # Shared component library (used by every app)
  streaming/          # StreamingProvider abstraction + providers
  chat/               # Chat protocol & domain logic
  payments/           # PaymentProvider abstraction + providers
services/
  realtime/           # Standalone WebSocket server (chat + presence)
docs/                 # Architecture & roadmap
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Run all apps/services in dev mode |
| `pnpm build` | Build everything (Turborepo, cached) |
| `pnpm typecheck` | Type-check every package/app |
| `pnpm lint` | Lint every package/app |
| `pnpm test` | Run tests |
| `pnpm format` | Prettier write |
| `pnpm db:generate` | Generate Prisma client |
| `pnpm db:migrate` | Run Prisma migrations (dev) |
| `pnpm db:studio` | Open Prisma Studio |

## Documentation

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — system design and trade-offs
- [docs/ROADMAP.md](docs/ROADMAP.md) — the 16-phase delivery plan
