import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArenaDTO } from './data/arena.dto';
import { ArenaService } from './arena.service';
import { ArenaController } from './arena.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ArenaDTO])],
  controllers: [ArenaController],
  providers: [ArenaService],
})
export class ArenaModule {}
