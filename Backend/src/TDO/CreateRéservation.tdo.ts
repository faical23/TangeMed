import {IsNotEmpty} from 'class-validator'

export class CreateReservationrTDO {
    
    @IsNotEmpty()
    date: number;  
}