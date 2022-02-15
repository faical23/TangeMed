/// TODO: create schema
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QaieDocument = Qaie & Document;
@Schema()
export class Qaie {
    @Prop()
    reference: string;
  
    @Prop()
    state: boolean;
  
    @Prop()
    sizeforday: number;

    @Prop()
    availabledate:Date;
}

export const QaieSchema = SchemaFactory.createForClass(Qaie);