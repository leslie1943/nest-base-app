import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { DropAncientItemCommand } from '../impl/drop-ancient-item.command';

@CommandHandler(DropAncientItemCommand)
export class DropAncientItemHandler implements ICommandHandler<DropAncientItemCommand> {
  constructor(
    private readonly repository: HeroRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: DropAncientItemCommand) {
    console.log(clc.greenBright('Async DropAncientItemCommand...'));

    const { heroId, itemId } = command;
    const hero = await this.repository.findOneById(+heroId)
    
    console.log(clc.greenBright(`hero:${JSON.stringify(hero)}`));

    hero.addItem(itemId);
    hero.commit();

    return {
     hero,
      itemId
    }
  }
}
