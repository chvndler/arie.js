

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx'],
  experimental: {
    appDir: true,
  },
  transpilePackages: ['@atlrdsgn/kit'],
}

module.exports = nextConfig
