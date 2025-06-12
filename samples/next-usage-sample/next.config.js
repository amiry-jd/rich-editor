/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your config options here, for example:
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["example.com"],
  },
};

module.exports = nextConfig;
