const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextTranslate(nextConfig)
