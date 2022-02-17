import { Module } from '@nestjs/common';
import { ShipController } from './ship.controller';
import { ShipService } from './ship.service';
import { Ship, ShipSchema } from '../Schema/ship.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ship.name, schema: ShipSchema }]),
  ],
  controllers: [ShipController],
  providers: [ShipService],
  exports: [ShipService]

})
export class ShipModule {}
