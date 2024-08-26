import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PostsModule } from 'src/posts/dto/res/posts.module';


@Module({
  imports:[PostsModule],
  controllers: [UsersController],
  providers: [UsersService],


})
export class UsersModule {}
