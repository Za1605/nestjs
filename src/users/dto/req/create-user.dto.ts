import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsEmail,
  IsString,
  IsNotIn,
  Matches,
  IsOptional,
  IsInt,
  Max,
  Min,
  IsNumber,
  Length,
  ValidateIf,
  ValidateNested,
  IsArray}
  from "class-validator";
import { TransformHelper } from "src/common/helpers/transform-help";


class CreateCarDto{
@Transform(TransformHelper.trim)
  @IsString()
  @Length(2,20)
  public readonly model: string;

@Transform(TransformHelper.trim)
  @IsString()
  @Length(2,20)
  public readonly produser: string;
}


export class CreateUserDto {


  @IsString()
  @IsEmail()
  public readonly email: string;


 @Transform(TransformHelper.trim)
  @IsNotIn(['password','qwe', '123' ])
  @IsString()
  @Matches(/^\w+([\.-]?\w+)*$/, {message: 'Please enter a valid email address'})
  public readonly password: string;

@Transform(TransformHelper.trim)
@Transform(TransformHelper.toLowerCase)
  @IsString()
  @Length(2,20)
  public readonly name: string;

  @Transform(TransformHelper.trim)
@IsString()
  @ValidateIf((obj)=>obj.age ===35)
@IsOptional()
  public readonly phone?: string;


@Type(()=>Number)
@IsInt()
@IsNumber()
@Max(120)
@Min(15)
@IsOptional()
  public readonly age?: number;

@IsOptional()
  @ValidateNested({each: true})
  @IsArray()
  @Type(()=>CreateCarDto)
  cars: CreateCarDto[];
}
