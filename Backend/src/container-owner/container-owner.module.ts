import { Module } from '@nestjs/common';
import { ContainerOwnerController } from './container-owner.controller';
import { ContainerOwnerService } from './container-owner.service';

@Module({
  controllers: [ContainerOwnerController],
  providers: [ContainerOwnerService]
})
export class ContainerOwnerModule {}
