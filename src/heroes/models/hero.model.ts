import { AggregateRoot } from '@nestjs/cqrs';
import * as clc from 'cli-color';

// import { HeroFoundItemEvent } from '../events/impl/hero-found-item.event';
// import { HeroKilledDragonEvent } from '../events/impl/hero-killed-dragon.event';

export class Hero extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }

  killEnemy(enemyId: string) {
    console.log(clc.redBright('[models:::Hero class]: Trigger killEnemy', enemyId));
    // TODO:
    // logic
    // this.apply(new HeroKilledDragonEvent(this.id, enemyId));
  }

  addItem(itemId: string) {
    console.log(clc.redBright('[models:::Hero class]: Trigger addItem', itemId));
    // TODO:
    // logic
    // this.apply(new HeroFoundItemEvent(this.id, itemId));
  }
}
