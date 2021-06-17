import { Controller, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/users/users.repository';
import { PhotoDto } from './interfaces/photos.dto';
import { PhotoRepository } from './photos.repository';
@Controller('photos')
export class PhotosController {
  constructor(
    @InjectRepository(PhotoRepository)
    private readonly photoREPO: PhotoRepository,

    @InjectRepository(UserRepository)
    private readonly userREPO: UserRepository,
  ) {}

  @Post()
  async create(@Body() photoDto: PhotoDto): Promise<PhotoDto> {
    const photo = await this.photoREPO.createPhoto(photoDto);
    const user = {
      name: photo.name,
      photoId: photo.id,
      photos: [photo, photo],
    };
    await this.userREPO.createUser(user);

    return photo;
  }
}
