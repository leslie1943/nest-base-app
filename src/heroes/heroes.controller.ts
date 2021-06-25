import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus, EventBus } from '@nestjs/cqrs';
import * as clc from 'cli-color';

// import { Hero } from './models/hero.model';

import { KillDragonCommand } from './commands/impl/kill-dragon.command';
import { DropAncientItemCommand } from './commands/impl/drop-ancient-item.command';
import { CreateHeroCommand } from './commands/impl/create-hero.command';
import { DeleteHeroCommand } from './commands/impl/delete-hero-command';
import { GetHeroesQuery } from './queries/impl/get-heroes.query';

import { HeroSlayDragonEvent } from './events/impl/hero-slay-dragon.event';

import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';
import { HeroDto } from './interfaces/create-hero-dto';

@Controller('heros')
export class HeroesGameController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly eventBus: EventBus,
  ) {}

  // CUD: CommandBus
  @Post(':id/kill')
  async killDragon(@Param('id') id: string, @Body() dto: KillDragonDto) {
    console.log(clc.magentaBright(`[controller] => Start to perform [killDragon] activity`));
    return this.commandBus.execute(new KillDragonCommand(id, dto.dragonId));
  }

  @Post(':id/slay')
  async slayDragon(@Param('id') id: string, @Body() dto: KillDragonDto) {
    console.log(clc.magentaBright(`[controller] => Start to perform [slayDragon] activity`));
    return await this.eventBus.publish(new HeroSlayDragonEvent(id, dto.dragonId));
  }

  // CUD: CommandBus
  @Post(':id/add-item')
  async addItem(@Param('id') id: string, @Body() dto: KillDragonDto) {
    console.log(clc.magentaBright(`[controller] => Start to perform addItem activity`));
    console.log(
      clc.magentaBright(`[controller] => addItem: id >>> ${id}, dragonId >>> ${dto.dragonId}`),
    );
    return this.commandBus.execute(new DropAncientItemCommand(id, dto.dragonId));
  }

  // CUD: CommandBus
  @Post()
  async createHero(@Body() hero: HeroDto): Promise<HeroDto> {
    console.log(clc.magentaBright(`[controller] => Start to perform [createHero] activity`));
    const newHero = await this.commandBus.execute(new CreateHeroCommand(hero));
    console.log(clc.magentaBright(`[controller] => addItem: hero >>> ${JSON.stringify(hero)}`));
    return newHero;
  }

  // CUD: CommandBus
  @Delete(':id')
  async deleteHero(@Param('id') id: string) {
    console.log(clc.magentaBright(`[controller] => Start to perform [deleteHero] activity`));
    return this.commandBus.execute(new DeleteHeroCommand(id));
  }

  // Read: QueryBus
  @Get()
  async findAll(): Promise<HeroDto[]> {
    console.log(clc.magentaBright(`[controller] => Start to perform [findAll] activity`));
    return this.queryBus.execute(new GetHeroesQuery());
  }

  // TODO:
  @Get()
  async findHero(): Promise<any[]> {
    // console.log(clc.magentaBright(`[controller] => Start to perform [findAll] activity`));
    return this.queryBus.execute(new GetHeroesQuery());
  }
}
