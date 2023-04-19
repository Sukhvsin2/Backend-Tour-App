import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), 
  AuthModule, MongooseModule.forRoot(process.env.DB_URL), LocationsModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
