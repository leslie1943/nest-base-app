import { Controller, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './interfaces/users.dto';
import { UserRepository } from './users.repository';
@Controller('users')
export class UsersController {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  @Post()
  async create(@Body() userDto: UserDto): Promise<UserDto> {
    return await this.userRepository.createUser(userDto);
  }
}
