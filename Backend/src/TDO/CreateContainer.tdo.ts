import {IsNotEmpty} from 'class-validator'

export class CreateContainerTDO {
  
  
    @IsNotEmpty()
    weight: number;
      
    @IsNotEmpty()
    typemarchendise: string;
      
}