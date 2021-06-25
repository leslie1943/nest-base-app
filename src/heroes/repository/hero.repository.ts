import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Hero as HeroEntity } from '../entity/heroes.entity';
import { HeroDto } from '../interfaces/create-hero-dto';
import { Hero } from '../models/hero.model';
import { userHero } from './fixtures/user';
import * as clc from 'cli-color';

@Injectable()
@EntityRepository(HeroEntity)
export class HeroRepository extends Repository<HeroEntity> {
  async findOneById(id: number): Promise<Hero> {
    console.log(clc.redBright('[repository] => parameter', id));
    console.log(clc.redBright('[repository] => userHero', JSON.stringify(userHero)));
    return userHero;
  }

  async findAllHeros(): Promise<HeroDto[]> {
    const query = this.createQueryBuilder('hero');
    return await query.getMany();
  }

  async createHero(hero: HeroDto) {
    return await this.save(hero);
  }

  async deleteHero(id: string) {
    const hero = await this.findOne(id);
    if (hero) {
      const delHero = await this.remove(hero);
      console.log(clc.redBright('[repository] => deleteHero', JSON.stringify(delHero)));
      return delHero;
    } else {
      return {
        status: -1,
        success: false,
        msg: 'Not found document!',
      };
    }
  }

  async findHero(dragonId: string, heroId: string) {
    const hero = await this.findOne(+heroId);
    console.log(clc.redBright('[repository] => findHero', JSON.stringify(hero)));
    return hero;
  }
}
