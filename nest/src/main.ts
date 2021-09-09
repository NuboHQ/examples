import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 5555;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
