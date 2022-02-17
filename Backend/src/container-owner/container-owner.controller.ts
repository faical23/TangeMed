import { Controller,Get } from '@nestjs/common';
// import { ShipOwnerService } from './container-owner.service';

@Controller('container-owner')
export class ContainerOwnerController {
    // constructor(private readonly shipownercontainer: ShipOwnerService) {}

    @Get()
    index() {
        return 'its work'
    }

}
