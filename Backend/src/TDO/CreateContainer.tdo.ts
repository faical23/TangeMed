import {IsNotEmpty,IsArray} from 'class-validator'

export class CreateContainerTDO {

    @IsNotEmpty()
    @IsArray()
    containers:[{
        reference: string;
        weight: number;
        typemarchendise: string;
        isvalide:boolean;
    }];      
}