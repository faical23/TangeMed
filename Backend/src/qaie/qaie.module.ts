import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QaieController } from './qaie.controller';
import { QaieService } from './qaie.service';
import { Qaie, qaieSchema } from '../Schema/qaie.schema';



@Module({
  imports: [MongooseModule.forFeature([{ name: Qaie.name, schema: qaieSchema }]),],
  controllers: [QaieController],
  providers: [QaieService],
  exports:[QaieService]
})
export class QaieModule {}