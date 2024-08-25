import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty(
    {example:'Yuliia@gmail.com',
     required:true,
     description:'The email of the User'})
  public readonly email: string;

  @ApiProperty({
    example:'Yuliia123',
    required:true,
    description:'The password shoud be at leas 8 character long'
  })
  public readonly password: string;

  @ApiProperty({
    example:'Yuliia Timchenko',
    required:true,
    description:'The name of the User'
  })
  public readonly name: string;

  @ApiProperty({
    example:'123456789',
    required:false,
    description:'The phone number of the User',
    default:'123456789',

  })
  public readonly phone?: string;

  @ApiProperty({
    example:23,
    required:false,
    description:'The age of the User',
  })
  public readonly age?: number;

}
