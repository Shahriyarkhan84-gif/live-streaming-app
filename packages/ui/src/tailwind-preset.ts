import type { Config } from 'tailwindcss';

/**
 * Shared Tailwind preset. Each app extends this so the whole platform
 * shares one design language (colors, radius, typography). The concrete
 * design tokens are refined in the UI phases; this establishes the wiring.
 */
const preset = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand palette placeholders — finalized during the UI phases.
        brand: {
          50: '#f2f0ff',
          100: '#e6e1ff',
          200: '#ccbfff',
          300: '#a894ff',
          400: '#8b6bff',
          500: '#7c4dff',
          600: '#6a35f0',
          700: '#5827cc',
          800: '#4622a3',
          900: '#3a2183',
        },
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
      },
    },
  },
  plugins: [],
} satisfies Partial<Config>;

export default preset;
