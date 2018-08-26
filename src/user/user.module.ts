import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDTO } from './data/user.dto';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserDTO])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
