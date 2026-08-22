import { reactConfig } from './react.js';

/**
 * ESLint config for Next.js apps. Extends the shared React config.
 * Next's own plugin is layered in each app via `eslint-config-next`
 * to keep this package free of the Next.js dependency.
 * @type {import('eslint').Linter.Config[]}
 */
export const nextConfig = [...reactConfig];

export default nextConfig;
