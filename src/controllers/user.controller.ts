import { Controller, Get } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import { UsersService } from 'src/domain/services/user.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('/users')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Get('/user')
  async find(): Promise<User> {
    return this.usersService.find()
  }
}
