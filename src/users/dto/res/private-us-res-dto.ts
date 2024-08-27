import { ApiProperty,PickType } from "@nestjs/swagger";
import { BaseUserResDto } from "./base-user-res-dto";


export class PrivateUsResDto extends PickType(BaseUserResDto,[
  'id',
  'name',
  'email',
  'age',
  'phone',

]){
  //@ApiProperty()
  //cars:string[];
}