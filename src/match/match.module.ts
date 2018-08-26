import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchDTO } from './data/match.dto';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';

@Module({
  imports: [TypeOrmModule.forFeature([MatchDTO])],
  controllers: [MatchController],
  providers: [MatchService],
})
export class MatchModule {}
