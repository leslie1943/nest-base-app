import * as clc from 'cli-color';
export class DropAncientItemCommand {
  constructor(public readonly heroId: string, public readonly itemId: string) {
    console.log(clc.yellowBright('[command/impl]: drop ancient-item command'));
  }
}
