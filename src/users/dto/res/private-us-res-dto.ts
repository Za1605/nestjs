import { ApiProperty } from "@nestjs/swagger";


export class PrivateUsResDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
}