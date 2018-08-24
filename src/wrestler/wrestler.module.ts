import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WrestlerSchema } from './data/wrestler.schema';
import { WrestlersController } from './wrestlers.controller';
import { WrestlersService } from './wrestlers.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Wrestler', schema: WrestlerSchema, collection: 'wrestlers' },
    ]),
  ],
  controllers: [WrestlersController],
  providers: [WrestlersService],
})
export class WrestlersModule {}
