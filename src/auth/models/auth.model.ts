import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum userType {
    Admin = "Admin",
    Regular = "Regular"
}

@Schema()
export class AuthUser{
    @Prop()
    user_type: userType

    @Prop()
    fName: string;

    @Prop()
    lName: string;

    @Prop({required: true, unique: true, trim: true})
    email: string;

    @Prop()
    hash: string;
}

export const UserSchema = SchemaFactory.createForClass(AuthUser);