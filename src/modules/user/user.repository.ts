import { InternalServerErrorException, Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './entity/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  private logger = new Logger('UserRepository');

  // fetch users
  public async fetchUsers(): Promise<User[]> {
    const query = this.createQueryBuilder();

    try {
      const users = await query.getMany();
      this.logger.verbose(`fetching users from db`);

      return users;
    } catch (err) {
      this.logger.error(`failed to fetch users - ${err.message}`);
      throw new InternalServerErrorException(
        `Failed to fetch users - ${err.message}`,
      );
    }
  }

  // get single user
  public async getUser(id: number): Promise<User> {
    const query = this.createQueryBuilder();

    try {
      const user = await query.where({ id: id }).getOne();
      this.logger.verbose(`get user "${user.name}"`);

      return user;
    } catch (err) {
      this.logger.error(
        `failed to get user by id ${id}, user may be not registered - ${err.message}`,
      );
      throw new InternalServerErrorException(
        `Failed to get user by ${id}, user may be not registered - ${err.message}`,
      );
    }
  }
}
