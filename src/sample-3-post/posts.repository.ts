import { EntityRepository, Repository } from 'typeorm';
import { Post } from './entity/post.entity';
import { PostAuthor } from './entity/post-author.entity';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  createPost = async (post: any) => {
    return await this.save(post);
  };
}

@EntityRepository(PostAuthor)
export class AuthorRepository extends Repository<PostAuthor> {
  createAuthor = async (author: any) => {
    return await this.save(author);
  };
}
