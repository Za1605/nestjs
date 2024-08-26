import { ApiProperty } from "@nestjs/swagger";

export class PublicUsResDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  age: number;
  @ApiProperty()
  password: string;

}