import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { Reservation, RéservationSchema } from '../Schema/réservation.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ContainerModule } from '../container/container.module'
import { ShipModule } from '../ship/ship.module'
import { ShipOwnerModule } from '../ship-owner/shipowner.module'
import { QaieModule } from '../qaie/qaie.module'


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Reservation.name, schema: RéservationSchema }]),
    ContainerModule,
    ShipModule,
    ShipOwnerModule,
    QaieModule],
  providers: [ReservationService],
  controllers: [ReservationController],
})
export class ReservationModule {}
