import { IsHeroIdExist } from '../validators/is-hero-id-exist.constraint';
export class HeroQueryParam {
  @IsHeroIdExist({
    message: 'Invalid Hero Id, try another one.',
  })
  id: string;
}
