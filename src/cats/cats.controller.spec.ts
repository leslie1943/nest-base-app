import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    controller = app.get<CatsController>(CatsController);
  });

  describe('root', () => {
    it('findOne case', () => {
      expect(controller.findOne('tom')).toBeTruthy();
    });

    it('findOne case', () => {
      expect(controller.findOne('tom')).toBeTruthy();
    });
  });
});
