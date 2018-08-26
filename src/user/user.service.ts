import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './data/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserDTO) private readonly repo: Repository<UserDTO>,
  ) {}

  async findAll(): Promise<UserDTO[]> {
    return await this.repo.find();
  }

  async find(id: number): Promise<UserDTO> {
    return await this.repo.findOne(id);
  }
}
