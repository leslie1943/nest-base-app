import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { HeroRepository } from '../repository/hero.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsHeroIdExistConstraint implements ValidatorConstraintInterface {
  constructor(private readonly heroRepository: HeroRepository) {}
  async validate(value: any) {
    const count = await this.heroRepository.countById(parseInt(value));
    return count > 0;
  }
}

export function IsHeroIdExist(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsHeroIdExistConstraint,
    });
  };
}
