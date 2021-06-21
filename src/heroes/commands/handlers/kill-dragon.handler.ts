import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { KillDragonCommand } from '../impl/kill-dragon.command';

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
  constructor(private readonly repository: HeroRepository) {}

  async execute(command: KillDragonCommand) {
    console.log(clc.greenBright('[command/handler]: KillDragonCommand'));

    const { heroId, dragonId } = command;
    const hero = await this.repository.findOneById(+heroId);

    console.log(clc.greenBright('[command/handler]: findOneById', JSON.stringify(hero)));

    hero.killEnemy(dragonId);
    hero.commit();

    return hero;
  }
}
