require('dotenv').config();

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const PORT = Number(process.env.PORT) || 3000;
const app = express();

const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({ message: 'node' });
});

app.get('/messages', async (req, res) => {
  const messages = await prisma.message.findMany();

  res.json(messages);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
