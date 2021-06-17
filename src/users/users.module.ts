import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { UserRepository } from './users.repository';

import { Photo } from '../photos/photo.entity';
import { PhotoRepository } from '../photos/photos.repository';
@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserRepository, Photo, PhotoRepository]),
  ],
  controllers: [UsersController],
})
export class UsersModule {}
