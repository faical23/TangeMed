import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation, ReservationDocument } from '../Schema/réservation.schema';


@Injectable()
export class ReservationService {
    constructor(
        @InjectModel(Reservation.name) private readonly reservationmodel: Model<ReservationDocument>,
      ) {}

    async create(reservationdata){
        const reservation = new this.reservationmodel(reservationdata).save();
        return reservation 
      }
    async findAll(){
        return await this.reservationmodel.find().exec();
    }
    
    async findOne(id: string){
        return await await this.reservationmodel.findById(id)
        .populate({path : 'ships',populate :{path:'containers'}})
        .populate('qaie')
        .exec();
    }

    async delete(id: string){
      return await this.reservationmodel.findByIdAndDelete(id).exec();
    }
}
