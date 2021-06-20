import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { KillDragonCommand } from './commands/impl/kill-dragon.command';
import { CreateHeroCommand } from './commands/impl/create-hero.command';
import { GetHeroesQuery } from './queries/impl/get-heroes.query';

import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';
import { HeroDto } from './interfaces/create-hero-dto';

import { Hero } from './models/hero.model';

@Controller('heros')
export class HeroesGameController {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  // 写操作: CommandBus
  @Post(':id/kill')
  async killDragon(@Param('id') id: string, @Body() dto: KillDragonDto) {
    return this.commandBus.execute(new KillDragonCommand(id, dto.dragonId));
  }

  // 读操作: QueryBus
  @Get()
  async findAll(): Promise<Hero[]> {
    return this.queryBus.execute(new GetHeroesQuery());
  }

  // 写操作: CommandBus
  @Post()
  async createHero(@Body() hero: HeroDto): Promise<HeroDto> {
    const resHero = await this.commandBus.execute(new CreateHeroCommand(hero));
    console.info('resHero::::', resHero);
    return resHero;
  }
}
