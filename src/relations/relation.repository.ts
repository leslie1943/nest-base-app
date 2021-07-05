import { EntityRepository, Repository } from 'typeorm';
import { RelationCategoryDto } from './dto/relation-category.dto';
import { RelationQuestionDto } from './dto/relation-question.dto';
import { RelationCategory } from './entity/relation-category.entity';
import { RelationQuestion } from './entity/relation-question.entity';

@EntityRepository(RelationCategory)
export class RelationCategoryRepository extends Repository<RelationCategory> {
  createCategory = async (data: RelationCategoryDto) => {
    return await this.save(data);
  };
}

@EntityRepository(RelationQuestion)
export class RelationQuestionRepository extends Repository<RelationQuestion> {
  createQuestion = async (data: RelationQuestionDto) => {
    return await this.save(data);
  };
}
