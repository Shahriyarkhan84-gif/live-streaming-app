import { reactConfig } from '@livestream/config/eslint/react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...reactConfig,
  {
    ignores: ['.next/**', 'next-env.d.ts'],
  },
];
