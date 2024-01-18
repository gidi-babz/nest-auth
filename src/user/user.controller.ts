import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  async findUserById(@Param('id') id: number) {
    return await this.userService.findById(id);
  }
}
