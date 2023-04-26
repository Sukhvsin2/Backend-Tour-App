import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthUser } from "../models/auth.model";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){
    constructor(config: ConfigService, @InjectModel('user') private readonly userModel: Model<AuthUser>){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('SECRET')
        });        
    }

    async validate(payload: {id: string, email: string}){
        const user = await this.userModel.findOne({_id: payload.id})
        delete user.hash;
        return user;
    }
}