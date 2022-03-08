/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiKey: process.env.NUBO_API_KEY,
  },
};

module.exports = nextConfig;
