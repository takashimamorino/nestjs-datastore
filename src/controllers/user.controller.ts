import { Controller, Get } from "@nestjs/common";

@Controller('/users')
export class UsersController {
  @Get()
  findAll(): string {
    console.log('hoge')
    return 'hoge'
  }
}
