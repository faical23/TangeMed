import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReservationrTDO } from '../TDO/CreateRéservation.tdo';
import { Reservation, ReservationDocument } from '../Schema/réservation.schema';
import { ContainerService } from "../container/container.service"


@Injectable()
export class ReservationService {
    constructor(
        @InjectModel(Reservation.name) private readonly reservationmodel: Model<ReservationDocument>,
         private readonly containerservice: ContainerService,
      ) {}

    async create(createreservationtdo: CreateReservationrTDO){
        // this.containerservice.create(createreservationtdo);
        // const reservation = new this.reservationmodel({createreservationtdo}).save();
        return createreservationtdo 
      }
    
}
