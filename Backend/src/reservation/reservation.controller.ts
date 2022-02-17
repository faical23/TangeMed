import { Controller,Post,Body } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationrTDO } from '../TDO/CreateRéservation.tdo';
import { ContainerService } from '../container/container.service';
import { CreateContainerTDO } from '../TDO/CreateContainer.tdo';
import { ShipService } from '../ship/ship.service'
import { CreateShipTDO } from '../TDO/CreateShip.tdo'
import { ShipOwnerService } from '../ship-owner/shipowner.service'
import { CreateShipOwnerTDO } from '../TDO/CreateShipOwner'



@Controller('reservation')
export class ReservationController {

    constructor(private readonly reservationservice: ReservationService,
                private readonly containerservice: ContainerService,
                private readonly shipservice: ShipService,
                private readonly shipownerservice: ShipOwnerService,
    ) {}

    @Post()
    async create( @Body() reservationtdo: CreateReservationrTDO,
                  @Body() createcontainertdo: CreateContainerTDO,
                  @Body() createshiptdo : CreateShipTDO,
                  @Body() createshipownertdo : CreateShipOwnerTDO
                ) 
    {

      /// CREATE CONTAINERS
      const  NewContainers = await this.containerservice.create(createcontainertdo);

      /// CREATE SHIP
      createshiptdo = {
        name:createshiptdo.name,
        nationality:createshiptdo.nationality,
        capacitycontainers:createshiptdo.capacitycontainers,
        containers:[],
      }
      NewContainers.map(container => {
        createshiptdo.containers.push(container._id)
      })
      const NewShip = await this.shipservice.create(createshiptdo);

      //// CREATE SHIP OWNER
      createshipownertdo ={
        nameOwnerShip:createshipownertdo.nameOwnerShip,
        emailOwnerShip:createshipownertdo.emailOwnerShip,
        phoneOwnerShip:createshipownertdo.phoneOwnerShip,
        nationalityOwnerShip:createshipownertdo.nationalityOwnerShip,
        descriptionOwnerShip:createshipownertdo.descriptionOwnerShip,
        ships:[NewShip._id]
      }
      const  NewShipOwner = await this.shipownerservice.create(createshipownertdo);


      return NewShipOwner
    }

}
