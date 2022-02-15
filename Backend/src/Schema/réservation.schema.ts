/// TODO: create schema
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {Qaie} from './qaie.schema'
import {Ship} from './ship.schema'
import * as mongoose from 'mongoose';


export type ReservationDocument = Reservation & Document;
@Schema()
export class Reservation {
    @Prop()
    reference: string;
  
    @Prop()
    date: Date;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Ship.name })
    ships: Ship;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Qaie.name })
    qaie: Qaie;

    @Prop()
    isparked:boolean
}

export const RéservationSchema = SchemaFactory.createForClass(Reservation);