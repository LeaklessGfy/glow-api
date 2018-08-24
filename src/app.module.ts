import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModesController } from './modes.controller';
import Services from './service';
import { StatesController } from './states.controller';
import { WrestlersController } from './wrestlers.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [ModesController, StatesController, WrestlersController],
  providers: Services,
})
export class ApplicationModule {}
