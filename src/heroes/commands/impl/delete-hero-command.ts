import * as clc from 'cli-color';

export class DeleteHeroCommand {
  constructor(public readonly id: string) {
    console.log(clc.yellowBright('[command/impl]: delete hero command'));
  }
}
