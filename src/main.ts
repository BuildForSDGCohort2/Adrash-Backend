import { NestFactory } from '@nestjs/core';

import { initAdapters } from './app/adapters.init';
import { AppModule } from './app/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  initAdapters(app);

  await app.listen(process.env.PORT || 5000);
  
}

bootstrap();
