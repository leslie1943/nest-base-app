import { EntityRepository, Repository } from 'typeorm';
import { Cat } from './cats.entity';
import { CatDto } from './interfaces/cats.dto';

@EntityRepository(Cat)
export class CatRepository extends Repository<Cat> {
  createCat = async (catDto: CatDto) => {
    return await this.save(catDto);
  };

  findAllCat = async () => {
    return 'Hello Cat';
  };
}
