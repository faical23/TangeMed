import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QaieController } from './qaie.controller';
import { Qaie, QaieSchema } from '../Schema/Qaie.schema';
import { QaieService } from './qaie.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: Qaie.name, schema: QaieSchema }])],
  controllers: [QaieController],
  providers: [QaieService]  
})
export class QaieModule {}