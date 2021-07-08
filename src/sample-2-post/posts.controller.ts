// Query,Put,Delete
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostAuthor } from './entity/post-author.entity';
// import { PostCategory } from './entity/post-category.entity';
import { PostDetails } from './entity/post-detail.entity';
// import { PostImage } from './entity/post-image.entity';
// import { PostMetadata } from './entity/post-meta.entity';
import { Posts } from './entity/post.entity';
import { PostsRepository } from './posts.repository';
@Controller('sample2_post')
export class Sample2PostController {
  constructor(
    @InjectRepository(PostsRepository)
    private readonly postRepository: PostsRepository,
  ) {}

  // POSTMAN-POST: http://localhost:3000/sample2_post
  @Post()
  async create(@Body() dto: any): Promise<any> {
    console.info('dto>>>>', dto);

    // details.
    const details = new PostDetails();
    details.authorName = 'Umed';
    details.comment = 'about post';
    details.metadata = 'post,details,one-to-one';

    // author
    const author = new PostAuthor();
    author.name = details.authorName;

    const post = new Posts();
    post.text = 'hello how are you?';
    post.title = 'hello';
    post.details = details;
    post.author = author;

    const newPost = await this.postRepository.createPost(post);
    console.info('newPost', newPost);
  }

  // POSTMAN-GET: http://localhost:3000/sample2_post
  @Get()
  async findPosts(): Promise<any> {
    const query = this.postRepository
      .createQueryBuilder('post')
      .where('post.title=:keyword')
      .setParameter('keyword', 'hello');
    const posts = await query.getMany();
    const total = await query.getCount();

    console.info('query.getSql()', query.getSql());
    const result = { posts, total };
    return result;
  }

  @Post('update/:id')
  async updatePost2(@Param('id') id: string, @Body() body: any): Promise<any> {
    // console.info('body data', body);
    // console.info('Param id', id);
    // const query = this.postRepository.createQueryBuilder('post').where(`id=${id}`);
    const query = this.postRepository
      .createQueryBuilder('post')
      .where('post.id=:id')
      .setParameter('id', id);
    const post = await query.getOne();
    post.title = body.title;
    return await this.postRepository.save(post);
  }
}
