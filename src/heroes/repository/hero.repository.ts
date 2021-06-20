import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Hero as HeroEntity } from '../entity/heroes.entity';
import { HeroDto } from '../interfaces/create-hero-dto';
import { Hero } from '../models/hero.model';
import { userHero } from './fixtures/user';
@Injectable()
@EntityRepository(HeroEntity)
export class HeroRepository extends Repository<HeroEntity> {
  async findOneById(id: number): Promise<Hero> {
    console.info('param id:', id);
    return userHero;
  }

  async findAll(): Promise<Hero[]> {
    return [userHero];
  }

  async createHero(hero: HeroDto) {
    return await this.save(hero);
  }
}
