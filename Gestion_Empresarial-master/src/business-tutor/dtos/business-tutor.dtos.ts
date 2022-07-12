/* eslint-disable prettier/prettier */
import {IsString,IsNumber} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBusinessTutordDto{
    @IsNumber()
    readonly identificationCard: number;
    @IsString()
    readonly name: string;
    @IsString()
    readonly surname: string;
    @IsString()
    readonly address: string;
    @IsString()
    readonly institutionalMail: string;
    @IsString()
    readonly personalMail: string;
    @IsNumber()
    readonly telephone: number;
}

export class UpdateBusinessTutorDto extends PartialType(CreateBusinessTutordDto){}


