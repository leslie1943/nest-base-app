import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { PhotoRepository } from './photos.repository';

import { User } from '../users/users.entity';
import { UserRepository } from '../users/users.repository';
@Module({
  imports: [
    TypeOrmModule.forFeature([Photo, PhotoRepository, User, UserRepository]),
  ],
  controllers: [PhotosController],
})
export class PhotosModule {}
