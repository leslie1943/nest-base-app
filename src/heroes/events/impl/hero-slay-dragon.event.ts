import * as clc from 'cli-color';

export class HeroSlayDragonEvent {
  constructor(public readonly heroId: string, public readonly dragonId: string) {
    console.log(
      clc.yellowBright(
        `[events/impl]: kill dragon event >>> heroId:${heroId} ++++ dragonId:${dragonId}`,
      ),
    );
  }
}
