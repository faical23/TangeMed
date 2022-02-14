import { Module } from '@nestjs/common';
import { ShipOwnerService } from './ship-owner.service';

@Module({
  providers: [ShipOwnerService]
})
export class ShipOwnerModule {}
