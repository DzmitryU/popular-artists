import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { join } from 'path';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

config();

import { AppModule } from './app.module';

const PORT = Number(process.env.PORT) || 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  app.useStaticAssets({
    root: join(__dirname, '../public'),
  });
  await app.listen(PORT, '0.0.0.0');
}

bootstrap();
