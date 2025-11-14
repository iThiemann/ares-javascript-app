import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    lastname: string;

    @ApiProperty()
    @IsNotEmpty()
    firstname: string;
    
    @ApiProperty()
    @IsString()
    someinfo: string;

    @ApiProperty()
    @IsBoolean()
    isActive: boolean;
}
