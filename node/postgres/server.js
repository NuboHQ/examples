require('dotenv').config();
const { Client } = require('pg');
const fastify = require('fastify')();

const PORT = process.env.PORT || 5555;
const client = new Client(process.env.POSTGRES_URL);

const start = async () => {
  try {
    await client.connect();
    console.log('Connected to Postgres');
  } catch (error) {
    console.error('Unable to connect to Postgres');
  }

  try {
    fastify.get('*', async (request, reply) => {
      const response = await client.query('SELECT $1::text as message', [
        'Hello from Postgres',
      ]);

      return {
        response: response.rows[0].message,
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
