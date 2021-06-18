import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { GetHeroesQuery } from '../impl';

@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
  constructor(private readonly repository: HeroRepository) {}

  async execute(/**query: GetHeroesQuery */) {
    // console.log(
    //   clc.yellowBright('get-heroes.handler query', JSON.stringify(query)),
    // );
    // console.log(clc.yellowBright('Async GetHeroesQuery...'));
    return this.repository.findAll();
  }
}

/**
 * queries/handlers/get-heroes.handler 里的 @QueryHandler(GetHeroesQuery) 装饰器是指向 impl下的 GetHeroesQuery 模块
 *
 * controller里的 queryBus.execute(new GetHeroesQuery());
 *
 * 所以当 controller 在执行 new GetHeroesQuery()的时候 会去找 被依赖注入到 GetHeroesHandler, 也就是去找 queries/handlers/get-heroes.handler, 然后执行里面的方法
 */
