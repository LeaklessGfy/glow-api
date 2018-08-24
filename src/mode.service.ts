import { Injectable } from '@nestjs/common';
import { ModeDTO } from './mode.dto';

@Injectable()
export class ModeService {
  private readonly modes: ModeDTO[] = [];

  findAll(): ModeDTO[] {
    return this.modes;
  }

  find(uid: string): ModeDTO {
    return this.modes.find(mode => mode.uid === uid);
  }
}
