/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Compile the shared workspace packages from TypeScript source.
  transpilePackages: [
    '@livestream/ui',
    '@livestream/types',
    '@livestream/auth',
    '@livestream/database',
    '@livestream/streaming',
  ],
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
