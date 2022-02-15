/// TODO: create schema
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Container } from './container.schema';
import * as mongoose from 'mongoose';

export type ContainerOwnerDocument = ContainerOwner & Document;
@Schema()
export class ContainerOwner {
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

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: Container.name }],})
  containers: Container;

}

export const ContainerOwnerSchema = SchemaFactory.createForClass(ContainerOwner);