import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const path = '/messages';

export const handler = async () => {
  const messages = await prisma.message.findMany();

  return messages;
};
