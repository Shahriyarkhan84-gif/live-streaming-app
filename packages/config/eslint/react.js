import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { baseConfig } from './base.js';

/** @type {import('eslint').Linter.Config[]} */
export const reactConfig = [
  ...baseConfig,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
];

export default reactConfig;
