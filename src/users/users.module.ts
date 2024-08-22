import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CarsModule } from 'src/cars/cars.module';

@Module({
  imports:[CarsModule],
  controllers: [UsersController],
  providers: [UsersService],

})
export class UsersModule {}
