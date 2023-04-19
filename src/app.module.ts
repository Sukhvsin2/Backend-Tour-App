import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [AuthModule, MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
