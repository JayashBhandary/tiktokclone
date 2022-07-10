/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com','lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
