/**
 * @livestream/payments
 *
 * Payment-provider abstraction for subscriptions, tips, platform fees, and
 * payouts. Like streaming, it hides the concrete vendor (Stripe, etc.)
 * behind a PaymentProvider interface with a MockProvider for local dev so
 * no paid service is required during initial development.
 *
 * Phase 0: package shell only. Implemented in Phase 12.
 */

export const PACKAGE_NAME = '@livestream/payments' as const;
