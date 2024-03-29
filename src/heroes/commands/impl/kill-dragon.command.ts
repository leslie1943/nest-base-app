import * as clc from 'cli-color';

export class KillDragonCommand {
  constructor(public readonly heroId: string, public readonly dragonId: string) {
    console.log(clc.yellowBright('[command/impl]: kill dragon command'));
    console.log(clc.yellowBright(`[command/impl]: kill dragon command heroId:${heroId}`));
    console.log(clc.yellowBright(`[command/impl]: kill dragon command dragonId:${dragonId}`));
  }
}
