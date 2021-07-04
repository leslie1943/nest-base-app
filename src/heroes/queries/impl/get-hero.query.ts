import * as clc from 'cli-color';

export class GetHeroeQuery {
  constructor(public readonly id: string) {
    console.log(
      clc.magenta('[queries impl]: constructor of class GetHeroeQuery has been invoked.'),
    );
  }
}
