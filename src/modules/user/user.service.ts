import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserRepository } from './user.repository';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  private logger = new Logger('UserService');

  constructor(private userRepository: UserRepository) {}

  // fetch users
  public async fetchUsers(): Promise<User[]> {
    return this.userRepository.fetchUsers();
  }

  // get single user by id
  public async getUser(id: number): Promise<User> {
    return this.userRepository.getUser(id);
  }

  // insert user
  public async addUser(userDto: UserDTO): Promise<{ message: string }> {
    const { name, birth } = userDto;
    const newUser = new User();

    newUser.name = name;
    newUser.birth = birth;

    try {
      await this.userRepository.save(newUser);
      this.logger.verbose(`new user ${name} registered!`);
      return {
        message: `User "${name}" registered!`,
      };
    } catch (err) {
      this.logger.error(`failed to register new user - ${err.message}`);
      throw new InternalServerErrorException(
        `Failed to register new user - ${err.message}`,
      );
    }
  }

  // delete user by id
  public async deleteUser(id: number): Promise<{ message: string }> {
    const user = await this.userRepository.findOne(id);

    try {
      await this.userRepository.remove(user);
      this.logger.verbose(`user "${user.name}" deleted!`);

      return {
        message: `User "${user.name}" deleted!`,
      };
    } catch (err) {
      this.logger.error(
        `failed to get user by ${id}, user may be not registered - ${err.message}`,
      );
      throw new InternalServerErrorException(
        `Failed to get user by ${id}, user may be not registered - ${err.message}`,
      );
    }
  }
}
