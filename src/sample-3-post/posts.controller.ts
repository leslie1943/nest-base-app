import { Controller, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostAuthor } from './entity/post-author.entity';
import { Post as PostEntity } from './entity/post.entity';
import { AuthorRepository, PostRepository } from './posts.repository';
@Controller('sample3_post')
export class Sample3ostController {
  constructor(
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
    @InjectRepository(AuthorRepository)
    private readonly authorRepository: AuthorRepository,
  ) {}

  /**
   * 1: Create Many
   * 2: Create One
   * POST: http://localhost:3000/sample3_post
   */
  @Post()
  async create(@Body() body: any): Promise<any> {
    console.info('>>>>>>>>>>> sample-3-post <<<<<<<<<<<<<<<<', body);

    // create posts
    const post1 = new PostEntity();
    post1.text = 'hello how are you33?';
    post1.title = 'hello';
    // post1.author = author;
    await this.postRepository.createPost(post1);

    const post2 = new PostEntity();
    post2.text = 'hello how are you33?';
    post2.title = 'hello';
    // post2.author = author;
    await this.postRepository.createPost(post2);

    // Author
    const author = new PostAuthor();
    author.name = 'Umed';
    author.posts = [post1, post2];
    await this.authorRepository.createAuthor(author);
  }

  /**
   * 1: Create One
   * 2: Create Many
   * * POST: http://localhost:3000/sample3_post/create
   */
  @Post('/create')
  async insertNew(@Body() body: any): Promise<any> {
    console.info('>>>>>>>>>>> sample-3-post create <<<<<<<<<<<<<<<<', body);
    // Author
    const author = new PostAuthor();
    author.name = 'Umed';
    await this.authorRepository.createAuthor(author);

    const post1 = new PostEntity();
    post1.text = 'hello how are you33?';
    post1.title = 'hello';
    post1.author = author;
    await this.postRepository.createPost(post1);

    const post2 = new PostEntity();
    post2.text = 'hello how are you33?';
    post2.title = 'hello';
    post2.author = author;
    await this.postRepository.createPost(post2);
  }
}
