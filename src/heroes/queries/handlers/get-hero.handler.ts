import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { GetHeroeQuery } from '../impl/get-hero.query';

@QueryHandler(GetHeroeQuery)
export class GetHeroHandler implements IQueryHandler<GetHeroeQuery> {
  constructor(private readonly repository: HeroRepository) {}

  async execute(query: GetHeroeQuery) {
    console.log(clc.blueBright('[queries handlers]: execute methods has been invoked.'));
    console.log(clc.yellowBright(JSON.stringify(query)));
    return this.repository.findOne({ where: { id: query.id } });
  }
}
