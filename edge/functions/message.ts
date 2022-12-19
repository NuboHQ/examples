import { PrismaClient } from '@prisma/client';
import { NuboContext } from 'nubo';

const prisma = new PrismaClient();

export const path = '/messages/:id';

export const handler = async (ctx: NuboContext) => {
  const { id } = ctx.req.params;
  const message = await prisma.message.findFirst({ where: { id } });

  return message;
};
