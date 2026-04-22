/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['react-icons'],
  experimental: {
    esmExternals: false,
  },
}

module.exports = nextConfig
