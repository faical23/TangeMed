import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShipOwnerService } from './shipowner.service';
import { ShipOwnerController } from './shipowner.controller';
import { ShipOwner, ShipOwnerSchema } from '../Schema/ShipOwner.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ShipOwner.name, schema: ShipOwnerSchema }]),],
  controllers: [ShipOwnerController],
  providers: [ShipOwnerService],
  exports: [ShipOwnerService]
})
export class ShipOwnerModule {}
