import { Module } from '@nestjs/common';
import { ContainerController } from './container.controller';
import { ContainerService } from './container.service';
import { Container, ContainerSchema } from '../Schema/container.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Container.name, schema: ContainerSchema }]),],
  controllers: [ContainerController],
  providers: [ContainerService],
  exports:[ContainerService]

})
export class ContainerModule {}
