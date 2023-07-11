import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

/**
 * Description: Initialise Nest with a basic configuration.
 */
async function bootstrap() {
  const environment = process.env.NODE_ENV || 'development';
  const filePath = `.env.${environment}`;
  dotenv.config({ path: filePath });

  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(process.env.PORT || 3005);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
