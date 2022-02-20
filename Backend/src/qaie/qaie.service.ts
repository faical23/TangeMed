import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Qaie, QaieDocument } from '../Schema/qaie.schema';

@Injectable()
export class QaieService {
    constructor(
        @InjectModel(Qaie.name) private readonly qaieModel: Model<QaieDocument>,
      ) {}
        
      async update(data){
        const {capacitycontainers,idqaie} = data
        const {sizeforday,availabledate} = await this.qaieModel.findById(idqaie).exec();
        const manydatenotavaible = Math.ceil(capacitycontainers/sizeforday)
        const someDate = new Date(availabledate);
        const result = someDate.setDate(someDate.getDate() + manydatenotavaible);
        const thechange = {
            state:false,
            availabledate:result
        }
        return await this.qaieModel.findByIdAndUpdate(idqaie,thechange).exec();
      }
}
