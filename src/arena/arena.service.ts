import { ArenaDTO } from './data/arena.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class ArenaService {
  constructor(
    @InjectRepository(ArenaDTO) private readonly repo: Repository<ArenaDTO>,
  ) {}

  async findAll(): Promise<ArenaDTO[]> {
    return await this.repo.find();
  }

  async find(id: number): Promise<ArenaDTO> {
    return await this.repo.findOne(id);
  }

  async findUid(uid: string): Promise<ArenaDTO> {
    return await this.repo.findOne({ uid });
  }
}
