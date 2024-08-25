import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PostsService } from 'src/posts/posts.service';


@Injectable()
export class UsersService {
  constructor(private readonly carsService: PostsService) {}


  public async create(createUserDto: CreateUserDto):Promise<any> {
    this.carsService.create({});
      return 'This action adds a new user';
  }


  public async findAll():Promise<any> {
    return `This action returns all users`;
  }


  public async findMe(id: number):Promise<any> {
    return `This action returns a #${id} user`;
  }
  public async updateMe(id: number, updateUserDto: UpdateUserDto):Promise<any> {
    return `This action updates a #${id} user`;
  }

  public async removeMe(id: number):Promise<any> {
    return `This action removes a #${id} user`;
  }
  public async findOne(id: number):Promise<any> {
    return `This action returns a #${id} user`;
  }
}
