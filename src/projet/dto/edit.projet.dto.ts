import { IsOptional, IsString } from "class-validator";

export class EditProjetDto {

    @IsString()
    @IsOptional()
    name: string

    
    @IsString()
    @IsOptional()
    description: string
    
    
    @IsString()
    @IsOptional()
    status: string
}