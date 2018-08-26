import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ModeDTO } from './data/mode.dto';
import { ModeController } from './mode.controller';
import { ModeService } from './mode.service';

@Module({
  imports: [TypeOrmModule.forFeature([ModeDTO])],
  controllers: [ModeController],
  providers: [ModeService],
})
export class ModeModule {}
