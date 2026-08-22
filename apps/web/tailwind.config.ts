import type { Config } from 'tailwindcss';
import preset from '@livestream/ui/tailwind-preset';

const config: Config = {
  presets: [preset],
  content: [
    './src/**/*.{ts,tsx}',
    // Include the shared UI package so its class names are not purged.
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
};

export default config;
