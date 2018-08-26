import { ModeController } from './mode.controller';
import { ModeDTO } from './data/mode.dto';
import { ModeService } from './mode.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ModeDTO])],
  controllers: [ModeController],
  providers: [ModeService],
})
export class ModeModule {}
