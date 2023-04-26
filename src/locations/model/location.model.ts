import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsOptional } from "class-validator";

@Schema()
export class Location{
    @Prop({required: true})
    name: string;

    @Prop({required: true, default: Date.now().toString()})
    @IsOptional()
    createdAt: string;

    @Prop({required: true, default: Date.now().toString()})
    @IsOptional()
    updatedAt: string;

    @Prop()
    description: string;

    @Prop({})
    @IsOptional()
    imagePath: string;
}

export const locationSchema = SchemaFactory.createForClass(Location);