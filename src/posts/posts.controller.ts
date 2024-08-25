import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';



import { ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { PostsListReqDto } from './dto/posts-list.req.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreatePostDto } from './dto/create-post.dto';


@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly carsService: PostsService) {}

  @Post()
  create(@Body() createCarDto: CreatePostDto) {
    return this.carsService.create(createCarDto);
  }

  @Get()
  findAll(@Query() query: PostsListReqDto) {
    return this.carsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdatePostDto) {
    return this.carsService.update(+id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
