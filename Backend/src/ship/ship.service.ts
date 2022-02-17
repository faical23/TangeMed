import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateShipTDO } from '../TDO/CreateShip.tdo'
import { Ship, ShipDocument } from '../Schema/ship.schema';

@Injectable()
export class ShipService {
    constructor(
        @InjectModel(Ship.name) private readonly ShipModel: Model<ShipDocument>,
      ) {}
        
      async create(createshiptdo: CreateShipTDO){
        return await new this.ShipModel(createshiptdo).save();
      }
}
