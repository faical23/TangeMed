import {IsNotEmpty,IsEmail,IsArray} from 'class-validator'

export class CreateShipOwnerTDO {
  
  @IsNotEmpty()
  nameOwnerShip: string;

  @IsEmail()
  emailOwnerShip: string;

  @IsNotEmpty()
  phoneOwnerShip: string;

  @IsNotEmpty()
  nationalityOwnerShip: string;

  @IsNotEmpty()
  descriptionOwnerShip: string;

  @IsArray()
  ships: string[];
  
}