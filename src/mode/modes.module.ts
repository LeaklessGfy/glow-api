import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ModeDTO } from "./data/mode.dto";
import { ModesController } from "./modes.controller";
import { ModesService } from "./modes.service";

@Module({
  imports: [TypeOrmModule.forFeature([ModeDTO])],
  controllers: [ModesController],
  providers: [ModesService]
})
export class ModesModule { }
