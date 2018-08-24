import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WrestlerDTO } from './wrestler.dto';
import { Model } from 'mongoose';

@Injectable()
export class WrestlerService {
  private readonly wrestlers: WrestlerDTO[] = [];

  constructor(
    @InjectModel('wrestler') private readonly wrestlerModel: Model<WrestlerDTO>,
  ) {}

  async findAll() {
    var d = await this.wrestlerModel.find().exec();
    return await d;
  }

  find(uid: string): WrestlerDTO {
    return this.wrestlers.find(wrestler => wrestler.uid === uid);
  }
}
