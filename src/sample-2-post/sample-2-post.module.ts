import { Module } from '@nestjs/common';
import { Sample2PostController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsRepository } from './posts.repository';
import { PostCategory } from './entity/post-category.entity';
import { PostDetails } from './entity/post-detail.entity';
import { PostImage } from './entity/post-image.entity';
import { PostMetadata } from './entity/post-meta.entity';
import { Posts } from './entity/post.entity';
import { PostAuthor } from './entity/post-author.entity';

@Module({
  imports: [
    // TypeOrmModule.forFeature: [Entity, Repository] => 让 Entity 和 Repository 关联
    TypeOrmModule.forFeature([
      PostCategory,
      PostDetails,
      PostImage,
      PostMetadata,
      Posts,
      PostAuthor,
      PostsRepository,
    ]),
  ],
  controllers: [Sample2PostController],
})
export class Sample2PostModule {}
