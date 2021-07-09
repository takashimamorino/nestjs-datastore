import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  findAll(): User[] {
    return this.users;
  }
}
