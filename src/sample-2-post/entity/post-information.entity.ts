import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Posts } from './post.entity';

@Entity('sample2_post_information')
export class PostInformation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @OneToOne(() => Posts, (post) => post.information, {
    cascade: ['update'],
  })
  post: Posts;
}
