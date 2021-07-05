import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelationCategory } from './entity/relation-category.entity';
import { RelationQuestion } from './entity/relation-question.entity';
import { RelationController } from './relation.controller';
import { RelationCategoryRepository, RelationQuestionRepository } from './relation.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RelationCategory,
      RelationQuestion,
      RelationCategoryRepository,
      RelationQuestionRepository,
    ]),
  ],
  controllers: [RelationController],
})
export class RelationModule {}
