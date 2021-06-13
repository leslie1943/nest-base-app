import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [],
    }).compile();

    controller = app.get<CatsController>(CatsController);
  });

  describe('root', () => {
    it('For jest case case', () => {
      expect(controller.forJest()).toBe('Jest');
    });
  });
});
