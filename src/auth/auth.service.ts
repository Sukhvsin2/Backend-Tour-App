import { ForbiddenException, Injectable } from '@nestjs/common';
import { LoginDto, SignupDto } from './dto';
import * as argon from "argon2"
import { InjectModel } from '@nestjs/mongoose';
import { AuthUser } from './models/auth.model';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(@InjectModel('user') private readonly userModel: Model<AuthUser>, private jwt: JwtService, private config: ConfigService){}
    async signup(dto: SignupDto){
        const hash = await argon.hash(dto.password);
        try {
            const newUser = {
                email: dto.email,
                fName: dto.fName,
                lName: dto.lName,
                hash
            }
            const user = await this.userModel.create(newUser)
            return this.signinToken(user.email, user.id);
        } catch (error) {
            
            if(error.code == '11000'){
                throw new ForbiddenException('Credentials taken');
            }
            
            throw error
        }
    }

    async login(dto: LoginDto){
        try {
            const data = {
                email: dto.email,
            }
            const user = await this.userModel.findOne({email: data.email}).exec();
            
            if(!user) throw new ForbiddenException("Incorrect Credentials")
            
            const pwMatch = await argon.verify(user.hash, dto.password)
            
            if(!pwMatch) throw new ForbiddenException("Incorrect Credentials")
            
            return this.signinToken(user.email, user.id);
        } catch (error) {
            throw error;
        }
    }

    async signinToken(email: string, id: string){
        const payload = {
            email,
            id
        }

        const token = await this.jwt.signAsync(payload, {expiresIn: '15m', secret: this.config.get('SECRET')})
        return {
            access_token: token
        }
    }
}
