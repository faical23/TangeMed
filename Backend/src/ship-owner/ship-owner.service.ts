import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateShipOwnerTDO } from '../TDO/CreateShipOwner
import { ShipOwner, ShipOwnerDocument } from '../Schema/ShipOwner.schema';
@Injectable()
export class ShipOwnerService {
    constructor(
        @InjectModel(ShipOwner.name) private readonly shipownerModel: Model<ShipOwnerDocument>,
      ) {}
        
      async create(createshipownertdo: CreateShipOwnerTDO){
        return await new this.shipownerModel({createshipownertdo}).save();
      }
}
