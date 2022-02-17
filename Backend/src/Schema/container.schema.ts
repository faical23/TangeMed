/// TODO: create schema
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContainerDocument = Container & Document;
@Schema()
export class Container {
  @Prop()
  reference: string;

  @Prop()
  isvalide: boolean;


  @Prop()
  weight: number;

  @Prop()
  typemarchendise:string;
  
}

export const ContainerSchema = SchemaFactory.createForClass(Container);