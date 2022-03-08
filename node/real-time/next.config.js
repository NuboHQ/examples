/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiKey: process.env.NUBO_API_KEY || 'api',
    publicApiKey: process.env.NEXT_PUBLIC_NUBO_API_KEY || 'public',
  },
};

module.exports = nextConfig;
