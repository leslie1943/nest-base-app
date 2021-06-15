import { EntityRepository, Repository } from 'typeorm';
import { Cat } from './cats.entity';
import { CatRef } from './catsRef.entity';
import { CatDto } from './interfaces/cats.dto';
import { CatRefDto } from './interfaces/catsRef.dto';

@EntityRepository(Cat)
export class CatRepository extends Repository<Cat> {
  createCat = async (catDto: CatDto) => {
    return await this.save(catDto);
  };

  findAllCat = async () => {
    return 'Hello Cat';
  };

  findById = async (id: string): Promise<Cat> => {
    return await this.createQueryBuilder()
      .select('cat')
      .from(Cat, 'cat') // EntityTarget, Alias
      .where('cat.id=:id', { id })
      .getOne();
  };
}

@EntityRepository(CatRef)
export class CatRefRepository extends Repository<CatRef> {
  createCatRef = async (refCat: CatRefDto) => {
    return await this.save(refCat);
  };
}
