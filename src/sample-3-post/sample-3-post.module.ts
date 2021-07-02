import { Module } from '@nestjs/common';
import { Sample3ostController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorRepository, PostRepository } from './posts.repository';
import { Post as Posts } from './entity/post.entity';
import { PostAuthor } from './entity/post-author.entity';

@Module({
  imports: [
    // TypeOrmModule.forFeature: [Entity, Repository] => 让 Entity 和 Repository 关联
    TypeOrmModule.forFeature([Posts, PostAuthor, PostRepository, AuthorRepository]),
  ],
  controllers: [Sample3ostController],
})
export class Sample3PostModule {}
