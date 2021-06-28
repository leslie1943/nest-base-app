import { EntityRepository, Repository } from 'typeorm';
import { Posts } from './entity/post.entity';

@EntityRepository(Posts)
export class PostsRepository extends Repository<Posts> {
  createPost = async (post: any) => {
    return await this.save(post);
  };
}
