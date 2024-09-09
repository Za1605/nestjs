import { Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req} from '@nestjs/common';
import { UsersService } from './users.service';

import { ApiOkResponse, ApiTags,ApiCreatedResponse,ApiNoContentResponse, ApiBearerAuth, ApiUnauthorizedResponse, ApiConflictResponse, ApiForbiddenResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dto/req/create-user.dto';
import { UpdateUserDto } from './dto/req/update-user.dto';
import { PublicUsResDto } from './dto/res/pudlic-us-res-dto';
import { PrivateUsResDto } from './dto/res/private-us-res-dto';




@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBadRequestResponse({ description: 'User Not Found' })
  @Post()
  public async create(
    @Req() req:Request,
    @Body () dto: CreateUserDto
  ):Promise<PrivateUsResDto> {
    return await this.usersService.create(dto);
  }

  @Get()
  public async findAll():Promise<any> {
    return await this.usersService.findAll();
  }


  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'User Not Found' })
  @ApiForbiddenResponse({description: 'Forbitten'})
  @ApiConflictResponse({description: 'Conflict'})
  @Get('me')
  public async findMe() :Promise<PrivateUsResDto>{
    return await this.usersService.findOne(1);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'User Not Found' })
  @ApiForbiddenResponse({description: 'Forbidden'})
  @ApiConflictResponse({description: 'Conflict'})
  @ApiBadRequestResponse({description: 'Bed Request'})
  @Patch('me')
  public async updateMe
  (@Body() dto:  UpdateUserDto,
   ):Promise<PrivateUsResDto> {
    return await this.usersService.updateMe(1, dto);
  }


  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'User Not Found' })
  @ApiForbiddenResponse({description: 'Forbidden'})
  @ApiConflictResponse({description: 'Conflict'})
  @ApiNoContentResponse({description: 'User has been remover'})
  @Delete('me')
  public async removeMe():Promise<void> {
    return await this.usersService.removeMe(1);
  }




  @Get(':userId')
  public async findOne
  (@Param('userIid')userId:string,
   ):Promise<PublicUsResDto>{
    return await this.usersService.findOne(+userId);
  }
}




