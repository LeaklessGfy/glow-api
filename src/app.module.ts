import { Module } from "@nestjs/common";
import { ActionsController } from "./actions.controller";
import { ModesController } from "./modes.controller";
import { StatesController } from "./states.controller";
import { WrestlersController } from "./wrestlers.controller";
import { EngineService } from "./service/engine.service";
import { ModeService } from "./service/mode.service";
import { WrestlerService } from "./service/wrestler.service";

@Module({
  imports: [],
  controllers: [
    ActionsController,
    ModesController,
    StatesController,
    WrestlersController
  ],
  components: [EngineService, ModeService, WrestlerService]
})
export class ApplicationModule {}
