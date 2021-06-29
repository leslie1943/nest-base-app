import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Posts } from './post.entity';

@Entity('sample2_post_metadata')
export class PostMetadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToOne(() => Posts, (post) => post.metadata)
  post: Posts;
}
