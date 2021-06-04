// import { Test, TestingModule } from '@nestjs/testing';
// import { CatsController } from './un-cats.controller';
// import { CatService } from './cats.service';

// describe('CatsController', () => {
//   let controller: CatsController;

//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       controllers: [CatsController],
//       providers: [CatService],
//     }).compile();

//     controller = app.get<CatsController>(CatsController);
//   });

//   describe('root', () => {
//     it('findAll case', () => {
//       expect(controller.findAll()).toBe('GET ALL CATS');
//     });

//     it('findCats case', () => {
//       expect(controller.findCats()).toBe('GET ALL CATS');
//     });

//     it('findOne case', () => {
//       expect(controller.findOne('tom')).toBe(
//         'this action returns cat which id is tom',
//       );
//     });

//     it('query case', () => {
//       expect(controller.queryCat('tom')).toBe('this return tom');
//     });
//   });
// });
