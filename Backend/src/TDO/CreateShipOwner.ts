import {IsNotEmpty,IsEmail} from 'class-validator'

export class CreateShipOwnerTDO {
  
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  nationality: string;

  @IsNotEmpty()
  description: string;
  
}