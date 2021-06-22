import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import * as clc from 'cli-color';

// import { Hero } from './models/hero.model';

import { KillDragonCommand } from './commands/impl/kill-dragon.command';
// import { DropAncientItemCommand } from './commands/impl/drop-ancient-item.command';
import { CreateHeroCommand } from './commands/impl/create-hero.command';
import { DeleteHeroCommand } from './commands/impl/delete-hero-command';
import { GetHeroesQuery } from './queries/impl/get-heroes.query';

import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';
import { HeroDto } from './interfaces/create-hero-dto';

@Controller('heros')
export class HeroesGameController {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  // CUD: CommandBus
  @Post(':id/kill')
  async killDragon(@Param('id') id: string, @Body() dto: KillDragonDto) {
    console.log(clc.bgBlueBright('[controller] => killDragon'));
    return this.commandBus.execute(new KillDragonCommand(id, dto.dragonId));
  }

  // TODO:
  // CUD: CommandBus
  // @Post(':id/add')
  // async dropItem(@Param('id') id: string, @Body() dto: KillDragonDto) {
  //   console.log(clc.bgBlueBright('[controller] => killDragon'));
  //   return this.commandBus.execute(new DropAncientItemCommand(id, dto.dragonId));
  // }

  // Read: QueryBus
  @Get()
  async findAll(): Promise<any[]> {
    return this.queryBus.execute(new GetHeroesQuery());
  }

  // CUD: CommandBus
  @Post()
  async createHero(@Body() hero: HeroDto): Promise<HeroDto> {
    const resHero = await this.commandBus.execute(new CreateHeroCommand(hero));
    console.info('resHero::::', resHero);
    return resHero;
  }

  @Delete(':id')
  async deleteHero(@Param('id') id: string) {
    return this.commandBus.execute(new DeleteHeroCommand(id));
  }
}
