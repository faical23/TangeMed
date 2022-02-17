import { Controller,Post,Body,Get } from '@nestjs/common';
import { ContainerService } from './container.service';
import { CreateContainerTDO } from '../TDO/CreateContainer.tdo';


@Controller('container')
export class ContainerController {
    constructor(private readonly containerservice: ContainerService) {}


    @Post()
    async create(@Body() createcontainertdo: CreateContainerTDO) {
      return await this.containerservice.create(createcontainertdo);
    }
}
