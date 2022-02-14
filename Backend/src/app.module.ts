import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QaieController } from './qaie/qaie.controller';
import { QaieModule } from './qaie/qaie.module';
import { ShipOwnerModule } from './ship-owner/ship-owner.module';
import { ContainerOwnerModule } from './container-owner/container-owner.module';
import { ShipModule } from './ship/ship.module';
import { ContainerModule } from './container/container.module';
import { RéservationModule } from './réservation/réservation.module';
import { CatégoryModule } from './catégory/catégory.module';
import { BlockModule } from './block/block.module';
import { ContainerPlaceModule } from './container-place/container-place.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://faical:faical123@cluster0.zo300.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), QaieModule, ShipOwnerModule, ContainerOwnerModule, ShipModule, ContainerModule, RéservationModule, CatégoryModule, BlockModule, ContainerPlaceModule],
  controllers: [AppController, QaieController],
  providers: [AppService],
})
export class AppModule {}
