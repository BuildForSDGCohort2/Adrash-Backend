import { Module } from '@nestjs/common';

import { SharedModule } from './shared/shared.module';
import { EventsGateway } from './test.gateway';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database/database.module';

@Module({
  imports: [SharedModule, ConfigModule.forRoot(), DatabaseModule],
  providers: [EventsGateway],
})
export class AppModule {}
