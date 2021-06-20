import { CommandHandler, ICommandHandler /** EventPublisher */ } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { CreateHeroCommand } from '../impl/create-hero.command';

@CommandHandler(CreateHeroCommand)
export class CreateHeroHandler implements ICommandHandler<CreateHeroCommand> {
  constructor(
    private readonly repository: HeroRepository /**  private readonly publisher: EventPublisher,*/,
  ) {}

  async execute(command: CreateHeroCommand) {
    console.log(clc.greenBright('[command/handler]: create hero handler'));
    return await this.repository.createHero(command.hero);
  }
}
