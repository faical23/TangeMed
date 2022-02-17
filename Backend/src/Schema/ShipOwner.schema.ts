/// TODO: create schema
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Ship } from './ship.schema';
import * as mongoose from 'mongoose';

export type ShipOwnerDocument = ShipOwner & Document;
@Schema()
export class ShipOwner {
  @Prop()
  nameOwnerShip: string;

  @Prop()
  emailOwnerShip: string;

  @Prop()
  phoneOwnerShip: string;

  @Prop()
  nationalityOwnerShip: string;

  @Prop()
  descriptionOwnerShip: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: Ship.name }],})
  ships: Ship;

}

export const ShipOwnerSchema = SchemaFactory.createForClass(ShipOwner);