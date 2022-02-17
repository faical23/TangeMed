import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContainerTDO } from '../TDO/CreateContainer.tdo';
import { Container, ContainerDocument } from '../Schema/container.schema';

@Injectable()
export class ContainerService {
    constructor(
        @InjectModel(Container.name) private readonly ContainerModel: Model<ContainerDocument>,
      ) {}    
      async create(createcontainertdo: CreateContainerTDO)
      {
        const containerArr = createcontainertdo.containers
        return await this.ContainerModel.insertMany(containerArr)
      }
}
