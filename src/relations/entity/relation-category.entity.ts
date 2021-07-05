import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RelationQuestion } from './relation-question.entity';

@Entity()
export class RelationCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  //  ManyToMany >>>>>> Entity, Entity's column.
  @ManyToMany(() => RelationQuestion, (question) => question.catetories)
  questions: RelationQuestion[];
}
