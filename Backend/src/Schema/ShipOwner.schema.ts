/// TODO: create schema
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Ship } from './ship.schema';
import * as mongoose from 'mongoose';

export type ShipOwnerDocument = ShipOwner & Document;
@Schema()
export class ShipOwner {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  nationality: string;

  @Prop()
  description: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: Ship.name }],})
  ships: Ship;

}

export const ShipOwnerSchema = SchemaFactory.createForClass(ShipOwner);