import { CommandHandler, ICommandHandler /** EventPublisher */ } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { DeleteHeroCommand } from '../impl/delete-hero-command';

@CommandHandler(DeleteHeroCommand)
export class DeleteHeroHandler implements ICommandHandler<DeleteHeroCommand> {
  constructor(
    private readonly repository: HeroRepository /**  private readonly publisher: EventPublisher,*/,
  ) {}

  async execute(command: DeleteHeroCommand) {
    console.log(clc.greenBright('[command/handler]: Delete hero handler'));
    return await this.repository.deleteHero(command.id);
  }
}
