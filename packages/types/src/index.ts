/**
 * @livestream/types
 *
 * Shared, framework-agnostic TypeScript types and enums used across every
 * app and package. Domain models (User, Stream, etc.) and their DTOs land
 * here in Phase 1. Keeping them in one place prevents drift between the
 * database layer, the API, and the UI.
 */

export const PACKAGE_NAME = '@livestream/types' as const;

/**
 * Standard shape for every API response envelope. Concrete request/response
 * DTOs will build on this in later phases.
 */
export type ApiSuccess<T> = {
  ok: true;
  data: T;
};

export type ApiError = {
  ok: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
};

export type ApiResult<T> = ApiSuccess<T> | ApiError;
