/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/voice-style-transfer': { page: '/[id]' },
      '/vertex-cover-problem': { page: '/[id]' },
      '/doctor-bot': { page: '/[id]' },
      '/nftmarketplace': { page: '/[id]' },
      '/CityEase-services': { page: '/[id]' },
      '/classroom': { page: '/[id]' },
    }
  },
}

module.exports = nextConfig
