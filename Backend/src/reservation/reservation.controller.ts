import { Controller,Post,Body,Get,Delete,Param } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationrTDO } from '../TDO/CreateRéservation.tdo';
import { ContainerService } from '../container/container.service';
import { CreateContainerTDO } from '../TDO/CreateContainer.tdo';
import { ShipService } from '../ship/ship.service'
import { CreateShipTDO } from '../TDO/CreateShip.tdo'
import { ShipOwnerService } from '../ship-owner/shipowner.service'
import { QaieService } from '../qaie/qaie.service'
import { v4 as uuidv4 } from 'uuid';


@Controller('reservation')
export class ReservationController {

    constructor(private readonly reservationservice: ReservationService,
                private readonly containerservice: ContainerService,
                private readonly shipservice: ShipService,
                private readonly shipownerservice: ShipOwnerService,
                private readonly qaieservice:QaieService
    ) {}

    @Post()
    async create(
                  @Body() Request,
                  @Body() reservationtdo: CreateReservationrTDO,
                  @Body() createcontainertdo: CreateContainerTDO,
                  @Body() createshiptdo : CreateShipTDO,
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
      const createshipownertdo ={
        nameOwnerShip:Request.nameOwnerShip,
        emailOwnerShip:Request.emailOwnerShip,
        phoneOwnerShip:Request.phoneOwnerShip,
        nationalityOwnerShip:Request.nationalityOwnerShip,
        descriptionOwnerShip:Request.descriptionOwnerShip,
        ships:[NewShip._id]
      }
      const  NewShipOwner = await this.shipownerservice.create(createshipownertdo);

      ///// UPDATE QAIE
      const Updateqaiereserved = await this.qaieservice.update(Request)


      //// CREATE RESERVATION
      const reservationdate = {
         date:new Date(Request.date),
         qaie:Request.idqaie,
         isparked:false,
         ships:NewShip._id,
         reference:uuidv4()
      }
      const createreservation = await this.reservationservice.create(reservationdate)

      return createreservation
    }

    @Get()
    async index() {
      return await this.reservationservice.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
      return await this.reservationservice.findOne(id)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.reservationservice.delete(id);
    }
}
