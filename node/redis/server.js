require('dotenv').config();
const fastify = require('fastify')();
const asyncRedis = require('async-redis');
const client = asyncRedis.createClient(
  process.env.REDIS_PORT,
  process.env.REDIS_HOST,
  { password: process.env.REDIS_PASSWORD }
);
const PORT = process.env.PORT || 5555;

const start = async () => {
  let isConnected = true;
  const errors = [];

  client.on('error', (error) => {
    errors.push(error.code || 'Unknown Error');
    isConnected = false;
  });

  try {
    fastify.get('*', async (request, reply) => {
      if (isConnected) {
        await client.get('test');

        return {
          response: 'Connected to Redis',
        };
      }

      return {
        response: 'Redis connection failed',
        errors,
      };
    });

    await fastify.listen(PORT, '0.0.0.0');
    console.log(`> http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
