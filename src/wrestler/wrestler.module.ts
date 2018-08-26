import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WrestlerController } from './wrestler.controller';
import { WrestlerDTO } from './data/wrestler.dto';
import { WrestlerService } from './wrestler.service';

@Module({
  imports: [TypeOrmModule.forFeature([WrestlerDTO])],
  controllers: [WrestlerController],
  providers: [WrestlerService],
})
export class WrestlerModule {}
