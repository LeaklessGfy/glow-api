import { ArenaController } from './arena.controller';
import { ArenaDTO } from './data/arena.dto';
import { ArenaService } from './arena.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ArenaDTO])],
  controllers: [ArenaController],
  providers: [ArenaService],
})
export class ArenaModule {}
