import { Hono } from 'hono';
import { serveStatic } from 'hono/serve-static.bun';
import { prisma } from './prisma';

const port = Number(process.env.PORT) || 5000;

const app = new Hono();

app.use('/favicon.ico', serveStatic({ path: './public/favicon.ico' }));

app.get('/', (c) => {
  return c.json({ message: 'Hello World' });
});

app.get('/messages', async (c) => {
  try {
    const messages = await prisma.message.findMany();

    return c.json(messages);
  } catch (error) {
    console.log(error);
    return c.text('Error');
  }
});

app.get('/add', async (c) => {
  const message = await prisma.message.create({
    data: { text: 'This is a test', icon: 'circle' },
  });

  return c.json(message);
});

console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
