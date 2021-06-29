import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Posts } from './post.entity';

@Entity('sample2_post_author')
export class PostAuthor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Posts, (post) => post.author)
  post: Posts;
}
