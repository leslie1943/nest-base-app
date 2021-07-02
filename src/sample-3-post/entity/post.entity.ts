import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { PostAuthor } from './post-author.entity';

@Entity('sample3_post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @ManyToOne(() => PostAuthor, (author) => author.posts, {
    cascade: true,
  })
  @JoinColumn()
  author: PostAuthor;
}
