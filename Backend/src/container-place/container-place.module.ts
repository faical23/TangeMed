import { Module } from '@nestjs/common';
import { ContainerPlaceService } from './container-place.service';
import { ContainerPlaceController } from './container-place.controller';

@Module({
  providers: [ContainerPlaceService],
  controllers: [ContainerPlaceController]
})
export class ContainerPlaceModule {}
