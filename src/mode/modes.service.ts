import { Injectable } from '@nestjs/common';
import { ModeDTO } from './data/mode.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ModesService {
  constructor(@InjectModel('Mode') private readonly model: Model<ModeDTO>) {}

  async findAll(): Promise<ModeDTO[]> {
    return this.model.find().exec();
  }

  async find(uid: string): Promise<ModeDTO> {
    return this.model.findOne({ uid }).exec();
  }
}
