import { EntityRepository, Repository } from 'typeorm';
// import { UserDto } from './interfaces/users.dto';
import { User } from './users.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createUser = async (user: any) => {
    return await this.save(user);
  };
}
