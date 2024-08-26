import { Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req} from '@nestjs/common';
import { UsersService } from './users.service';

import { ApiOkResponse, ApiTags,ApiCreatedResponse,ApiNoContentResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserDto } from './dto/req/create-user.dto';
import { UpdateUserDto } from './dto/req/update-user.dto';
import { PublicUsResDto } from './dto/res/pudlic-us-res-dto';
import { PrivateUsResDto } from './dto/res/private-us-res-dto';




@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBearerAuth()
   @ApiCreatedResponse ({type: PublicUsResDto})
  @Post()
  public async create(
    @Req() req:Request,
    @Body () dto: CreateUserDto
 ):Promise<any> {
    return await this.usersService.create(dto);
  }

  @Get()
  public async findAll():Promise<any> {
    return await this.usersService.findAll();
  }
   @ApiOkResponse()
  @Get('me')
  public async findMe(@Param('id') id: string) :Promise<any>{
    return await this.usersService.findOne(+id);
  }
  @ApiOkResponse({type: PrivateUsResDto})
  @Patch('me')
  public async updateMe(@Body() dto:  UpdateUserDto):Promise<any> {
    return await this.usersService.updateMe(1, dto);
  }
   @ApiNoContentResponse({description: 'User has been remover'})
  @Delete('me')
  public async removeMe():Promise<any> {
    return await this.usersService.removeMe(1);
  }
  @ApiOkResponse({type: PublicUsResDto})
  @Get(':userId')
  public async findOne(@Param('userIid')userId:string):Promise<any>{
    return await this.usersService.findOne(+userId);
  }
}
function ApiBearer(target: UsersController, propertyKey: 'create', descriptor: TypedPropertyDescriptor<(req: Request, dto: CreateUserDto) => Promise<any>>): void | TypedPropertyDescriptor<(req: Request, dto: CreateUserDto) => Promise<any>> {
    throw new Error('Function not implemented.');
}

