import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  findAll(): string {
    return 'GET ALL CATS';
  }
  findCats(): string {
    return 'GET ALL CATS';
  }
}
