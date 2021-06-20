import { HeroDto } from '../../interfaces/create-hero-dto';

export class CreateHeroCommand {
  constructor(public readonly hero: HeroDto) {}
}
