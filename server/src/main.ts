import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';

config();

import { AppModule } from './app.module';

const PORT = Number(process.env.PORT) || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}

bootstrap();
