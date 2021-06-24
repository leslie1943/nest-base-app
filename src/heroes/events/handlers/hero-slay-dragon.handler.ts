import { IEventHandler, EventsHandler, EventPublisher } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from 'src/heroes/repository/hero.repository';
import { HeroSlayDragonEvent } from '../impl/hero-slay-dragon.event';

@EventsHandler(HeroSlayDragonEvent)
export class HeroSlayDragonHandler implements IEventHandler<HeroSlayDragonEvent> {
  constructor(
    private readonly repository: HeroRepository,
    private readonly publisher: EventPublisher,
  ) {
    console.log(clc.yellowBright(`[events/handler]: constructor function`));
  }

  handle(event: HeroSlayDragonEvent) {
    console.log(
      clc.yellowBright(
        `[events/handler]: kill dragon event >>> event params:${JSON.stringify(event)}`,
      ),
    );
  }
}
