import { Module } from '@nestjs/common';
import { RéservationService } from './réservation.service';
import { RéservationController } from './réservation.controller';

@Module({
  providers: [RéservationService],
  controllers: [RéservationController]
})
export class RéservationModule {}
