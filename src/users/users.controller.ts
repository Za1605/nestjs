import { Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Post()
  public async create(@Body () dto: CreateUserDto):Promise<any> {
    return this.usersService.create(dto);
  }

  @Get()
  public async findAll():Promise<any> {
    return this.usersService.findAll();
  }

  @Get('me')
  public async findMe(@Param('id') id: string) :Promise<any>{
    return this.usersService.findOne(+id);
  }

  @Patch('me')
  public async updateMe(@Body() dto:  UpdateUserDto):Promise<any> {
    return this.usersService.updateMe(1, dto);
  }

  @Delete('me')
  public async removeMe():Promise<any> {
    return this.usersService.removeMe(1);
  }
  @Get(':userId')
  public async findOne(@Param('userIid')userId:string):Promise<any>{
    return this.usersService.findOne(+userId);
  }
}
