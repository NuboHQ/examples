module.exports = {
  publicRuntimeConfig: {
    appNameId: process.env.NUBO_APP_NAME,
    region: process.env.NUBO_REGION,
    location: process.env.NUBO_LOCATION,
    provider: process.env.NUBO_CLOUD_PROVIDER,
  },
  devIndicators: {
    autoPrerender: false,
  },
  images: {
    domains: ['assets.nubo.app'],
  },
};
