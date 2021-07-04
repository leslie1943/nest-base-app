import { MaxLength } from 'class-validator';

export class HeroParamsSimple {
  // @MinLength(1, {
  //   message: 'Id is too short',
  // })
  @MaxLength(3, {
    message: 'Title is too long',
  })
  id: string;
}
