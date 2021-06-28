import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PostCategory } from './post-category.entity';
import { PostDetails } from './post-detail.entity';
import { PostImage } from './post-image.entity';
import { PostMetadata } from './post-meta.entity';
import { PostAuthor } from './post-author.entity';
import { PostInformation } from './post-information.entity';

@Entity('sample2_post')
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  // post has relation with category, however inverse relation is not set (category does not have relation with post set)
  @OneToOne(() => PostCategory, { cascade: true })
  // @JoinColumn, 这是必选项并且只能在关系的一侧设置. 你设置@JoinColumn的哪一方, 哪一方的表将包含一个"relation id"和目标实体表的外键.
  @JoinColumn()
  category: PostCategory;

  // post has relation with details. cascade inserts here means if new PostDetails instance will be set to this
  // relation it will be inserted automatically to the db when you save this Post entity
  @OneToOne(() => PostDetails, (details) => details.post, { cascade: ['insert'] })
  @JoinColumn()
  details?: PostDetails;

  // post has relation with details. cascade update here means if new PostDetail instance will be set to this relation
  // it will be inserted automatically to the db when you save this Post entity
  @OneToOne(() => PostImage, (image) => image.post, {
    cascade: ['update'],
  })
  @JoinColumn()
  image: PostImage;

  @OneToOne(() => PostMetadata, (metadata) => metadata.post)
  @JoinColumn()
  metadata: PostMetadata | null;

  // post has relation with details. full cascades here
  @OneToOne(() => PostInformation, (information) => information.post, {
    cascade: true,
  })
  @JoinColumn()
  information: PostInformation;

  // post has relation with details. not cascades here. means cannot be persisted, updated or removed
  @OneToOne(() => PostAuthor, (author) => author.post)
  @JoinColumn()
  author: PostAuthor;
}
