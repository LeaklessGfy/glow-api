import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WrestlerDTO } from './dto/wrestler.dto';
import { Model } from 'mongoose';

@Injectable()
export class WrestlerService {
  private readonly wrestlers: WrestlerDTO[] = [];

  constructor(
    @InjectModel('Wrestler') private readonly model: Model<WrestlerDTO>,
  ) {}

  async findAll(): Promise<WrestlerDTO[]> {
    return await this.model.find().exec();
  }

  async find(uid: string): Promise<WrestlerDTO> {
    return await this.model.findOne({ uid: uid }).exec();
  }
}
