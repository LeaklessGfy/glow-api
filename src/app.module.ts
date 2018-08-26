import { ArenaModule } from './arena/arena.module';
import { MatchModule } from './match/match.module';
import { ModeModule } from './mode/mode.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { WrestlerModule } from './wrestler/wrestler.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ArenaModule,
    MatchModule,
    ModeModule,
    UserModule,
    WrestlerModule,
  ],
})
export class ApplicationModule {}
