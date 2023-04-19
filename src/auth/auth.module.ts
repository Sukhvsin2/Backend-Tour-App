import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/auth/models/auth.model';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([
    {name: "user", schema: UserSchema}
  ])],
  providers: [AuthService, JwtService],
  controllers: [AuthController]
})
export class AuthModule {}
