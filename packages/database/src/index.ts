/**
 * @livestream/database
 *
 * Owns the Prisma schema, migrations, and a single shared PrismaClient
 * instance. Every app talks to Postgres through this package — never
 * directly — so connection handling, logging, and query helpers live in
 * one place.
 *
 * Phase 0: the client is scaffolded but not yet generated (no models).
 * Once Phase 1 defines the schema and `prisma generate` runs, this file
 * will export a memoized `prisma` client:
 *
 *   import { PrismaClient } from '@prisma/client';
 *   export const prisma = globalThis.__prisma ?? new PrismaClient();
 */

export const PACKAGE_NAME = '@livestream/database' as const;

/** Connection string is read from the DATABASE_URL environment variable. */
export const DATABASE_URL_ENV = 'DATABASE_URL' as const;
