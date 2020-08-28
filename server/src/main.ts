import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';

import { AppModule } from './app.module';

const PORT: number = parseInt(process.env['PIZZA_PORT'], 10) || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useWebSocketAdapter(new WsAdapter(app) as any);

  await app.listen(PORT);

  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
