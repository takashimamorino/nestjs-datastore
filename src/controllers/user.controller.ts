import { Controller, Get } from "@nestjs/common";
import { User } from "src/domain/entities/user.entity";
import { UsersService } from 'src/domain/services/user.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  findAll(): User[] {
    return this.usersService.findAll()
  }
}
