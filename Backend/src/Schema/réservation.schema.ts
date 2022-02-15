/// TODO: create schema
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {Qaie} from './qaie.schema'
import {Ship} from './ship.schema'
import * as mongoose from 'mongoose';


export type RéservationDocument = Réservation & Document;
@Schema()
export class Réservation {
    @Prop()
    reference: string;
  
    @Prop()
    date: Date;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Ship.name })
    ships: Ship;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Qaie.name })
    qaie: Qaie;
}

export const RéservationSchema = SchemaFactory.createForClass(Réservation);