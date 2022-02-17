import {IsNotEmpty} from 'class-validator'

export class CreateQaieTDO {
  
    @IsNotEmpty()
    sizeforday:number;
_  
}