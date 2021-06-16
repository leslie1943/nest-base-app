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

  // ------------------------ Get Many start ------------------------ //

  // ✅✅✅ OK
  findAllCatThroughQueryBuilder = async (): Promise<Cat[]> => {
    // 由于使用了 EntityRepository 的方式, this 已经指向了 Cat Entity,
    // createQueryBuilder 的时候只需要给 这个 Entity 指定别名就可以了
    return await this.createQueryBuilder('cat').getMany();
  };

  /**
   * 根据 query 参数动态拼接 sql
   */
  findAllCat = async (catDto: CatDto): Promise<Cat[]> => {
    const query = this.createQueryBuilder('cat');

    // /cats?name=Leslie的时候会触发 query 下列条件.
    if (catDto.name) {
      query.where('cat.name = :name', {
        name: catDto.name,
      });
    }
    // /cats?name=Leslie&id=1
    if (catDto.id) {
      query.andWhere('cat.id = :id', {
        id: catDto.id,
      });
    }

    console.info('query.getSql()', query.getSql());
    return await query.getMany();
  };
  // ------------------------ Get Many finish ------------------------ //

  // ------------------------ Get One start ------------------------ //
  findByIdThroughRepository = async (id: string): Promise<Cat> => {
    return await this.findOne({
      where: { id },
    });
  };

  findByIdThroughQueryBuilder = async (id: string): Promise<Cat> => {
    const query = this.createQueryBuilder('cat').where('cat.id = :id', {
      id: id,
    });
    return await query.getOne();
  };

  findDataWithNameAndAgeColumn = async (id: string): Promise<Cat> => {
    const query = this.createQueryBuilder('cat')
      .select(['cat.name', 'cat.age'])
      .where('cat.id = :id', {
        id: id,
      });
    return await query.getOne();
  };
  // ------------------------ Get One finish ------------------------ //
}

@EntityRepository(CatRef)
export class CatRefRepository extends Repository<CatRef> {
  createCatRef = async (refCat: CatRefDto) => {
    return await this.save(refCat);
  };
}
