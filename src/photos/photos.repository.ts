import { EntityRepository, Repository } from 'typeorm';
import { PhotoDto } from './interfaces/photos.dto';
import { Photo } from './photo.entity';

@EntityRepository(Photo)
export class PhotoRepository extends Repository<Photo> {
  createPhoto = async (photo: PhotoDto) => {
    return await this.save(photo);
  };
}
