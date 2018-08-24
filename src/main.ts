import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cors from 'cors';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  const options = new DocumentBuilder()
    .setTitle('World Live Wrestling')
    .setDescription('The WLW API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document);
  app.use(cors());
  await app.listen(3000);
}

bootstrap();
