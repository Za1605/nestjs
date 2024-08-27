import { ApiProperty, PickType } from "@nestjs/swagger";
import { BaseUserResDto } from "./base-user-res-dto";

export class PublicUsResDto extends PickType(BaseUserResDto,[
  'age',
  'name',
  'id'
]){
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  age: string;


}