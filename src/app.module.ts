import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ModesModule } from "./mode/modes.module";
import { WrestlersModule } from "./wrestler/wrestler.module";

@Module({ imports: [TypeOrmModule.forRoot(), ModesModule, WrestlersModule] })
export class ApplicationModule {}
