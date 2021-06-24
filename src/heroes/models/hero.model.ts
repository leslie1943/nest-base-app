import { AggregateRoot } from '@nestjs/cqrs';
import * as clc from 'cli-color';

import { HeroSlayDragonEvent } from '../events/impl/hero-slay-dragon.event';
// import { HeroFoundItemEvent } from '../events/impl/hero-found-item.event';

export class Hero extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }

  killEnemy(enemyId: string) {
    console.log(clc.redBright('[<<<<<<models>>>>>>]: Trigger killEnemy', enemyId));
    // this.apply(new HeroSlayDragonEvent(this.id, enemyId));
  }

  addItem(itemId: string) {
    console.log(clc.redBright('[<<<<<<models>>>>>>]: Trigger addItem', itemId));
    // TODO:
    // logic
    // this.apply(new HeroFoundItemEvent(this.id, itemId));
  }
}
