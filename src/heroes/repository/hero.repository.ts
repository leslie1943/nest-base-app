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
  // offical example
  async findOneById(id: number): Promise<Hero> {
    console.log(clc.bgCyanBright('[repository] => parameter', id));
    console.log(clc.bgCyanBright('[repository] => userHero', JSON.stringify(userHero)));
    return userHero;
  }

  async findAll(): Promise<Hero[]> {
    return [userHero];
  }

  // DIY examples
  async createHero(hero: HeroDto) {
    return await this.save(hero);
  }

  async deleteHero(id: string) {
    const hero = await this.findOne(id);
    if (hero) {
      const delHero = await this.remove(hero);
      console.log(clc.bgCyanBright('[repository] => deleteHero', JSON.stringify(delHero)));
      return delHero;
    } else {
      return {
        status: -1,
        success: false,
        msg: 'Not found document!',
      };
    }
  }
}
