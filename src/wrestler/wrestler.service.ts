import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { WrestlerDTO } from './data/wrestler.dto';

@Injectable()
export class WrestlerService {
  constructor(
    @InjectRepository(WrestlerDTO)
    private readonly repo: Repository<WrestlerDTO>,
  ) {}

  async findAll(): Promise<WrestlerDTO[]> {
    return await this.repo.find({
      relations: ['health', 'stamina', 'intensity'],
    });
  }

  async find(id: number): Promise<WrestlerDTO> {
    return await this.repo.findOne(id, {
      relations: ['health', 'stamina', 'intensity'],
    });
  }

  async findUid(uid: string): Promise<WrestlerDTO> {
    return await this.repo.findOne(
      { uid },
      {
        relations: ['health', 'stamina', 'intensity'],
      },
    );
  }
}
