import { Module } from '@nestjs/common';
import { CatégoryService } from './catégory.service';
import { CatégoryController } from './catégory.controller';

@Module({
  providers: [CatégoryService],
  controllers: [CatégoryController]
})
export class CatégoryModule {}
