import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {


  public readonly email: string;


  public readonly password: string;


  public readonly name: string;


  public readonly phone?: string;


  public readonly age?: number;

}
