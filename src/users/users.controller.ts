import { IsEmail, IsInt, IsNotIn, IsNumber, IsOptional, IsOptional, IsString, Length, Matches, Max, Min } from "class-validator";

export class CreateUserDto{

  @IsString()
  @Length(2,20)
  public readonly name: string;

  @IsString()
  @IsEmail()
  public readonly email: string;

  @IsNotIn(['password', 'qwe', '123'])
  @IsString()
  @Matches(/^[a-z0-9]+$/, {message: 'Invalid email address'})
  public readonly password: string;


  @IsInt()
  @IsNumber()
  @Max(120)
  @Min(15)
  @IsOptional()
  public readonly age?: number;


  @IsString()
  @IsOptional()
  public readonly phone?: string;

}

