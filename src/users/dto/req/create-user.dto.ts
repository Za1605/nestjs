import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsNotIn, Matches, IsOptional, IsInt, Max, Min, IsNumber } from "class-validator";

export class CreateUserDto {

  @IsString()
  @IsEmail()
  public readonly email: string;



  @IsNotIn(['password','qwe', '123' ])
  @IsString()
  @Matches(/^\w+([\.-]?\w+)*$/, {message: 'Please enter a valid email address'})
  public readonly password: string;


  @IsString()
  @length(2,20)
  public readonly name: string;

@IsString()
@IsOptional()
  public readonly phone?: string;

@IsInt()
@IsNumber()
@Max(120)
@Min(15)
@IsOptional()
  public readonly age?: number;

}
