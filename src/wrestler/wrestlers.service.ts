import { Injectable } from '@nestjs/common';
import { WrestlerDTO } from './data/wrestler.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WrestlersService {
  constructor(
    @InjectRepository(WrestlerDTO)
    private readonly repo: Repository<WrestlerDTO>
  ) {}

  async findAll(): Promise<WrestlerDTO[]> {
    return await this.repo.find({
      relations: ['health', 'stamina', 'intensity']
    });
  }

  async find(id: number): Promise<WrestlerDTO> {
    return await this.repo.findOne(id, {
      relations: ['health', 'stamina', 'intensity']
    });
  }

  async findUid(uid: string): Promise<WrestlerDTO> {
    return await this.repo.findOne(
      { uid },
      {
        relations: ['health', 'stamina', 'intensity']
      }
    );
  }
}
