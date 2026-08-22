/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@livestream/ui',
    '@livestream/types',
    '@livestream/auth',
    '@livestream/database',
  ],
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
