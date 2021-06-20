import * as clc from 'cli-color';

export class GetHeroesQuery {
  constructor() {
    console.log(
      clc.magenta(
        '[queries impl]: constructor of class GetHeroesQuery has been invoked.',
      ),
    );
  }
}
