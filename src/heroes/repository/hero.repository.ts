import { Injectable } from '@nestjs/common';
import { Hero } from '../models/hero.model';
import { userHero } from './fixtures/user';

@Injectable()
export class HeroRepository {
  async findOneById(id: number): Promise<Hero> {
    console.info('param id:', id);
    return userHero;
  }

  async findAll(): Promise<Hero[]> {
    return [userHero];
  }
}
