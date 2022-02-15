import {IsNotEmpty} from 'class-validator'

export class CreateShipTDO {
  
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    nationality: string;
      
    @IsNotEmpty()
    capacitycontainers:number;
  
}