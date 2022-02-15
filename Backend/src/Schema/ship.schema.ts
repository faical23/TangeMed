/// TODO: create schema
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Container } from './container.schema';
import * as mongoose from 'mongoose';

export type ShipDocument = Ship & Document;
@Schema()
export class Ship {
  @Prop()
  name: string;

  @Prop()
  nationality: string;
    
  @Prop()
  capacitycontainers:number;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: Container.name }],})
  containers: Container;

}

export const ShipSchema = SchemaFactory.createForClass(Ship);