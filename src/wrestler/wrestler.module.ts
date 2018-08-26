import { Module } from '@nestjs/common';
import { WrestlersController } from './wrestlers.controller';
import { WrestlersService } from './wrestlers.service';
import { WrestlerDTO } from './data/wrestler.dto';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WrestlerDTO])],
  controllers: [WrestlersController],
  providers: [WrestlersService]
})
export class WrestlersModule {}
