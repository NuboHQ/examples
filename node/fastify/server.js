require('dotenv').config();

const LOGGER = process.env.LOGGER === 'true';
const PORT = process.env.PORT || 5555;
const RUNTIME = process.env.NUBO_RUNTIME || 'unknown';
const REGION = process.env.NUBO_REGION || 'unknown';
const LOCATION = process.env.NUBO_LOCATION || 'unknown';
const fastify = require('fastify')({ logger: LOGGER });
const path = require('path');

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
});

fastify.register(require('point-of-view'), {
  engine: {
    ejs: require('handlebars'),
  },
});

fastify.get('*', async (request, reply) => {
  return reply.view('/templates/index.hbs', {
    runtime: RUNTIME,
    region: REGION,
    location: LOCATION,
  });
});

const start = async () => {
  try {
    await fastify.listen(PORT, '0.0.0.0');
    console.log(`> http://localhost:${PORT}`);
    console.log(`> region: ${REGION}`);
    console.log(`> location: ${LOCATION}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
