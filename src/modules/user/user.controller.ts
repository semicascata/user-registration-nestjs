import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';

@Controller('api/v1/usreg/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  public async fetchUsers(): Promise<User[]> {
    return this.userService.fetchUsers();
  }

  @Get(':id')
  public async getUser(@Param('id') id: number): Promise<User> {
    return this.userService.getUser(id);
  }

  @Post()
  public async addUser(@Body() userDto: UserDTO): Promise<{ message: string }> {
    return this.userService.addUser(userDto);
  }

  @Delete(':id')
  public async deleteUser(
    @Param('id') id: number,
  ): Promise<{ message: string }> {
    return this.userService.deleteUser(id);
  }
}
