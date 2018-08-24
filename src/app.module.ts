import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModesController } from './modes.controller';
import { WrestlersController } from './wrestlers.controller';
import { WrestlerService } from './wrestler.service';
import { ModeService } from './mode.service';
import { WrestlerSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest', {
      useNewUrlParser: true,
    }),
    MongooseModule.forFeature([
      { name: 'Wrestler', schema: WrestlerSchema, collection: 'wrestler' },
    ]),
  ],
  controllers: [ModesController, WrestlersController],
  providers: [ModeService, WrestlerService],
})
export class ApplicationModule {}
