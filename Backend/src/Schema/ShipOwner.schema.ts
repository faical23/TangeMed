/// TODO: create schema
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CostumerDocument = Costumer & Document;
@Schema()
export class Costumer {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  city: string;

  @Prop()
  created_at: Date;

}

export const CostumerSchema = SchemaFactory.createForClass(Costumer);