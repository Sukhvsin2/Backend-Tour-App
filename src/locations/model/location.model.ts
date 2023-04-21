import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Location{
    @Prop({required: true})
    name: string;

    @Prop({})
    coordinations: string;


}