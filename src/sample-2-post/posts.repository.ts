import { EntityRepository, Repository } from 'typeorm';
import { Posts } from './entity/post.entity';

@EntityRepository(Posts)
export class PostsRepository extends Repository<Posts> {
  createPost = async (post: any) => {
    console.info('post in repos', post);
    return await this.save(post);
  };
}
