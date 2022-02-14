import { Nubo } from 'https://storage.nubo.codes/@nubo/nubo/0.0.3/mod.ts';

const VERSION = '0.0.1';

Nubo.router.get('/', ({ response }) => {
  response.body = {
    name: 'deno-test',
    version: VERSION,
    nubo: {
      cloudProvider: Nubo.config.cloudProvider,
      region: Nubo.config.region,
      location: Nubo.config.location,
      secret: Deno.env.get('SECRET') || '--',
    },
  };
});

Nubo.start();
