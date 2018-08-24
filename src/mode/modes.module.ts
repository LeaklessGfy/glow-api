import { Module } from '@nestjs/common';
import { ModesController } from './modes.controller';
import { ModesService } from './modes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ModeSchema } from './data/mode.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Mode', schema: ModeSchema, collection: 'modes' },
    ]),
  ],
  controllers: [ModesController],
  providers: [ModesService],
})
export class ModesModule {}
