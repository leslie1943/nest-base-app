import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RelationCategory } from './relation-category.entity';

@Entity()
export class RelationQuestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  /**
   * ManyToMany >>>>>> Entity, Entity's column.
   * cascade:
   *    1.对应属性的(catetories)的数据会自动被插入到数据库中
    *      const category1 = new RelationCategory();
            category1.name = 'animals';
            const category2 = new RelationCategory();
            category2.name = 'zoo';

            const question = new RelationQuestion();
            question.text = 'text: where is animal';
            question.title = 'title: where is animal';
            question.catetories = [category1, category2];
          category1, category1 会自动被写入到数据库中, 反之却不行
   *    2.ONE SIDE ONLY
   * JoinTable:
   *
   */
  @ManyToMany(() => RelationCategory, (category) => category.questions, { cascade: true })
  @JoinTable({
    name: 'question_categories',
    joinColumn: {
      name: 'question_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'categroy_id',
      referencedColumnName: 'id',
    },
  })
  catetories: RelationCategory[];
}
