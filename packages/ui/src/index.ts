/**
 * @livestream/ui
 *
 * The single shared component library consumed by every app (web + admin).
 * No UI components are duplicated across apps — they all live here.
 *
 * Phase 0 establishes the package + build wiring with the `cn` helper, a
 * shared Tailwind preset, and a foundational Button. The full library
 * (Cards, Inputs, Modals, Dropdowns, Tabs, Tables, Navigation, StreamCard,
 * VideoPlayer, Chat components, Loading/Error/Empty states) is built out
 * during the UI phases.
 */

export { cn } from './utils/cn';
export { Button, buttonVariants, type ButtonProps } from './components/button';

export const PACKAGE_NAME = '@livestream/ui' as const;
