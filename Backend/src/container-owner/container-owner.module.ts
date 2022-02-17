import { Module } from '@nestjs/common';
import { ContainerOwnerController } from './container-owner.controller';
import { ContainerOwnerService } from './container-owner.service';
import { ContainerOwner, ContainerOwnerSchema } from '../Schema/container-owner.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ContainerOwner.name, schema: ContainerOwnerSchema }]),
  ],
  controllers: [ContainerOwnerController],
  providers: [ContainerOwnerService]
})
export class ContainerOwnerModule {}
