import { Module } from '@nestjs/common';
import { UsersController } from 'src/controllers/user.controller';
import { UsersService } from 'src/domain/services/user.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})

export class UserModule { }
