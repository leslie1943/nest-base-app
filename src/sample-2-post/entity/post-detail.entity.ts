import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Posts } from './post.entity';
@Entity('sample2_post_details')
export class PostDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  authorName: string;

  @Column()
  comment: string;

  @Column()
  metadata: string;

  @OneToOne(() => Posts, (post) => post.details, { cascade: true })
  post: Posts;
}
