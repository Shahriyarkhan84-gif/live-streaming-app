/**
 * @livestream/auth
 *
 * Authentication and authorization for the whole platform, built on
 * Auth.js (NextAuth v5). This package will own: the Auth.js configuration,
 * the Prisma adapter wiring, session helpers, the Role/permission model,
 * and RBAC guards used by API routes and server components.
 *
 * Roles (Phase 2): VIEWER, STREAMER, MODERATOR, ADMINISTRATOR.
 * Every permission check runs server-side — client-supplied roles are
 * never trusted.
 *
 * Phase 0: package shell only. Implemented in Phase 2.
 */

export const PACKAGE_NAME = '@livestream/auth' as const;

/** Platform roles. The concrete enum + permission matrix land in Phase 2. */
export const ROLE_NAMES = ['VIEWER', 'STREAMER', 'MODERATOR', 'ADMINISTRATOR'] as const;
export type RoleName = (typeof ROLE_NAMES)[number];
