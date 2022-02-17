import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQaieTDO } from '../TDO/CreateQaie.tdo'
import { Qaie, QaieDocument } from '../Schema/qaie.schema';
@Injectable()
export class QaieService {
    constructor(
        @InjectModel(Qaie.name) private readonly qaieModel: Model<QaieDocument>,
      ) {}

      async findAll(){
        return await this.qaieModel.find().exec();
      }

      async create(createqaietdo: CreateQaieTDO){
        return await new this.qaieModel({createqaietdo}).save();
      }

      async update(id: string, createqaietdo: CreateQaieTDO){
        return await this.qaieModel.findByIdAndUpdate(id, createqaietdo).exec();
      }
}
