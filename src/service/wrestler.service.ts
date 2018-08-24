import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WrestlerDTO } from '../dto/wrestler.dto';
import { Model } from 'mongoose';

@Injectable()
export class WrestlerService {
  private readonly wrestlers: WrestlerDTO[] = [];

  constructor(
    @InjectModel('Wrestler') private readonly wrestlerModel: Model<WrestlerDTO>,
  ) {}

  async findAll(): Promise<WrestlerDTO[]> {
    return await this.wrestlerModel.find().exec();
  }

  find(uid: string): WrestlerDTO {
    return this.wrestlers.find(wrestler => wrestler.uid === uid);
  }
}
