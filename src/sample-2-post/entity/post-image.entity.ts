import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Posts } from './post.entity';

@Entity('sample2_post_image')
export class PostImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @OneToOne(() => Posts, (post) => post.image)
  post: Posts;
}
