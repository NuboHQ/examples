module.exports = {
  publicRuntimeConfig: {
    appNameId: process.env.NUBO_APP_NAME || 'unkown',
    region: process.env.NUBO_REGION || 'unkown',
    location: process.env.NUBO_LOCATION || 'unkown',
    provider: process.env.NUBO_CLOUD_PROVIDER || 'unkown',
  },
  devIndicators: {
    autoPrerender: false,
  },
  images: {
    domains: ['assets.nubo.app'],
  },
};
