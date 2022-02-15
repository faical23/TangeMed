import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReservationrTDO } from '../TDO/CreateRéservation.tdo
import { Reservation, ReservationDocument } from '../Schema/réservation.schema';

@Injectable()
export class RéservationService {

    constructor(
        @InjectModel(Reservation.name) private readonly reservationModel: Model<ReservationDocument>,
      ) {}

    async create(createreservationtdo: CreateReservationrTDO){
        return await new this.reservationModel({createreservationtdo}).save();
      }
}
