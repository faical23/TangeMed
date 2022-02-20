import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Factory } from "nestjs-seeder";
 
export type QaieDocument = Qaie & Document;
@Schema()
export class Qaie{
    @Factory(faker => faker.date.past())
    @Prop()
    availabledate: Date;

    @Factory('true')
    @Prop()
    state: boolean;

    @Factory(150)
    @Prop()
    sizeforday: number;

    @Factory(faker => faker.name.findName())
    @Prop()
    reference: string;
}
 
export const qaieSchema = SchemaFactory.createForClass(Qaie);