import { Injectable } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interface';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];
  findAll(): Cat[] {
    return this.cats;
  }
  findCats(): Cat[] {
    return this.cats;
  }
  create(cat: Cat): void {
    this.cats.push(cat);
  }
}
