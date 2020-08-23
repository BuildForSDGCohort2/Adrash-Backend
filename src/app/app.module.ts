import { UserModule } from './core/user/user.module';
import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { EventsGateway } from './test.gateway';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database/database.module';
import { TransformInterceptor } from './shared/interceptors/transform.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    DatabaseModule,
    UserModule, SharedModule, ConfigModule.forRoot()],
  providers: [
    EventsGateway,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule { }