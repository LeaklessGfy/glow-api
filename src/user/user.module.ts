import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserDTO } from './data/user.dto';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserDTO])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
