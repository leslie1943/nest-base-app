import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RelationCategory } from './entity/relation-category.entity';
import { RelationQuestion } from './entity/relation-question.entity';
import { RelationCategoryRepository, RelationQuestionRepository } from './relation.repository';

@Controller('relations')
export class RelationController {
  constructor(
    @InjectRepository(RelationCategoryRepository)
    private readonly categoryRepository: RelationCategoryRepository,
    @InjectRepository(RelationQuestionRepository)
    private readonly questionRepository: RelationQuestionRepository,
  ) {}

  @Post('question')
  async createData(@Body() data: any): Promise<any> {
    console.info('data', data);

    // 2 Category ====> 1 Question

    const category1 = new RelationCategory();
    category1.name = 'animals';
    const category2 = new RelationCategory();
    category2.name = 'zoo';

    const question = new RelationQuestion();
    question.text = 'text: where is animal';
    question.title = 'title: where is animal';
    question.catetories = [category1, category2];

    const res = await this.questionRepository.createQuestion(question);
    return res;
  }

  @Post('category')
  async insertData(@Body() data: any): Promise<any> {
    console.info('data', data);

    // 2 Question ====> 1 Category
    const q1 = new RelationQuestion();
    q1.text = 'q1 for category.test';
    q1.title = 'question 1 for category.test';
    await this.questionRepository.createQuestion(q1);

    const q2 = new RelationQuestion();
    q2.text = 'q2 for category.test';
    q2.title = 'question 2 for category.test';
    await this.questionRepository.createQuestion(q2);

    const category = new RelationCategory();
    category.name = 'test';
    category.questions = [q1, q2];

    const res = await this.categoryRepository.createCategory(category);
    return res;
  }
}
