import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ModeDTO } from './data/mode.dto';

@Injectable()
export class ModesService {
  constructor(
    @InjectRepository(ModeDTO) private readonly repo: Repository<ModeDTO>
  ) {}

  async findAll(): Promise<ModeDTO[]> {
    return await this.repo.find();
  }

  async find(id: number): Promise<ModeDTO> {
    return await this.repo.findOne(id);
  }

  async findUid(uid: string): Promise<ModeDTO> {
    return await this.repo.findOne({ uid });
  }
}
