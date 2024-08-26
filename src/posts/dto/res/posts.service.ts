import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../req/create-post.dto';
import { PostsListReqDto } from '../req/posts-list.req.dto';
import { UpdatePostDto } from '../req/update-post.dto';


@Injectable()
export class PostsService {
  create(createCarDto: CreatePostDto) {
    return 'This action adds a new car';
  }

  findAll(query: PostsListReqDto) {
    return `This action returns all cars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdatePostDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
