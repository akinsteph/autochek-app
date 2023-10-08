/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  images: {
    domains: ['media.autochek.africa'], 
  },
  async rewrites() {
      return [
          // Rewrite everything else to use `pages/index`
          {
              source: '/:path*',
              destination: '/',
          },
      ];
  },
}

module.exports = nextConfig
