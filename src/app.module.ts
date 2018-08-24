import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModesController } from './modes.controller';
import { StatesController } from './states.controller';
import { WrestlersController } from './wrestlers.controller';
import { WrestlerService } from './wrestler.service';
import { ModeService } from './mode.service';
import { EngineService } from './engine.service';
import { WrestlerSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest', {
      useNewUrlParser: true,
    }),
    MongooseModule.forFeature([{ name: 'wrestler', schema: WrestlerSchema }]),
  ],
  controllers: [ModesController, StatesController, WrestlersController],
  providers: [EngineService, ModeService, WrestlerService],
})
export class ApplicationModule {}
