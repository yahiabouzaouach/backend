import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTaskDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsNotEmpty()
    status: string

}