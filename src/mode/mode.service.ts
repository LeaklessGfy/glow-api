import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ModeDTO } from './data/mode.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ModeService {
  constructor(
    @InjectRepository(ModeDTO) private readonly repo: Repository<ModeDTO>,
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
