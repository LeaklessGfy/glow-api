import * as cors from 'cors';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { ApplicationModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  const options = new DocumentBuilder()
    .setTitle('GLOW API')
    .setDescription('Glow API for Glow Game')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document);
  app.use(cors());
  await app.listen(3000);
}

bootstrap();
