import { Module } from '@nestjs/common';
import { WrestlerController } from './wrestler.controller';
import { WrestlerService } from './wrestler.service';
import { WrestlerDTO } from './data/wrestler.dto';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WrestlerDTO])],
  controllers: [WrestlerController],
  providers: [WrestlerService],
})
export class WrestlerModule {}
