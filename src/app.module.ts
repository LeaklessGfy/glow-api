import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModesModule } from './mode/modes.module';
import { WrestlersModule } from './wrestler/wrestler.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest', {
      useNewUrlParser: true,
    }),
    ModesModule,
    WrestlersModule,
  ],
})
export class ApplicationModule {}
