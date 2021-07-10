import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';

const dummuy: User[] = [
  {
    id: '01',
    name: 'name01',
    age: 20
  },
  {
    id: '02',
    name: 'name02',
    age: 20
  },
  {
    id: '03',
    name: 'name03',
    age: 20
  }
]

@Injectable()
export class UsersService {
  private readonly users: User[] = dummuy;

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async find(): Promise<User> {
    return this.users[0];
  }
}
