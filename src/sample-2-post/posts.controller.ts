import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostCategory } from './entity/post-category.entity';
import { PostDetails } from './entity/post-detail.entity';
import { PostImage } from './entity/post-image.entity';
import { PostMetadata } from './entity/post-meta.entity';
import { Posts } from './entity/post.entity';
import { PostsRepository } from './posts.repository';
@Controller('sample2_post')
export class Sample2PostController {
  constructor(
    @InjectRepository(PostsRepository)
    private readonly postRepository: PostsRepository,
  ) {}

  @Post()
  async create(@Body() dto: any): Promise<any> {
    console.info('dto>>>>', dto);
    const details = new PostDetails();
    details.authorName = 'Umed';
    details.comment = 'about post';
    details.metadata = 'post,details,one-to-one';

    const post = new Posts();
    post.text = 'hello how are you?';
    post.title = 'hello';
    post.details = details;

    this.postRepository.createPost(post);
  }
}
