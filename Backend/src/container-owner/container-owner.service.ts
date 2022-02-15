import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContainerOwnerTDO } from '../TDO/CreateContainer-owner.tdo
import { ContainerOwner, ContainerOwnerDocument } from '../Schema/container-owner.schema';

@Injectable()
export class ContainerOwnerService {
    constructor(
        @InjectModel(ContainerOwner.name) private readonly ContainerOwnerModel: Model<ContainerOwnerDocument>,
      ) {}
        
      async create(createcontainerownertdo: CreateContainerOwnerTDO){
        return await new this.ContainerOwnerModel({createcontainerownertdo}).save();
      }
}
