import { Injectable } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interface';

@Injectable()
export class CatsService {
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

  update(name: string, updCat: Cat) {
    this.cats.forEach((item, index) => {
      if (name === item.name) {
        this.cats[index] = updCat;
      }
    });
  }
}
