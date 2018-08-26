import { MatchController } from './match.controller';
import { MatchDTO } from './data/match.dto';
import { MatchService } from './match.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MatchDTO])],
  controllers: [MatchController],
  providers: [MatchService],
})
export class MatchModule {}
