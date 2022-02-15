import {IsNotEmpty} from 'class-validator'

export class CreateContainerOwnerTDO {
  
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    email: string;
      
    @IsNotEmpty()
    phone:number;

    @IsNotEmpty()
    nationality: string;
      
    @IsNotEmpty()
    description:number;
  
}