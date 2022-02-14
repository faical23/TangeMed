/// TODO: create schema
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QaieDocument = Qaie & Document;
@Schema()
export class Qaie {

}

export const QaieSchema = SchemaFactory.createForClass(Qaie);