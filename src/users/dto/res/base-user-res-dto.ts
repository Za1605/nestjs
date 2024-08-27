import { ApiProperty } from "@nestjs/swagger";

export class BaseUserResDto{

  @ApiProperty({format:'uuid'})
  id:string;

  @ApiProperty({example:'Joe Doe'})
  name:string;

  @ApiProperty()
  email:string;

  @ApiProperty()
  age:string;

  @ApiProperty()
  phone:string;

  @ApiProperty()
  createdAt:Date;

  @ApiProperty()
  updatedAt:Date;


}

