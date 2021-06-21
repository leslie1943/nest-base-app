import { HeroDto } from '../../interfaces/create-hero-dto';
import * as clc from 'cli-color';

export class CreateHeroCommand {
  constructor(public readonly hero: HeroDto) {
    console.log(clc.yellowBright('[command/impl]: create hero command'));
  }
}
