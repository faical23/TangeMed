import {IsNotEmpty,IsEmail} from 'class-validator'

export class CreateCostumerDTO {
  
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  city: string;
}