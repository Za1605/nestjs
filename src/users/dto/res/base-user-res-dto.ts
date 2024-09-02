import { ApiProperty } from "@nestjs/swagger";

export class BaseUserResDto{

  @ApiProperty({format:'uuid'})
  id:string;

  @ApiProperty({example:'Joe Doe'})
  name:string;

  email:string;

  age?:string;


  phone?:string;


  createdAt:Date;


  updatedAt:Date;


}

