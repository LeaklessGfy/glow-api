import { Module } from "@nestjs/common";
import { CardsController } from "./cards.controller";
import { ModesController } from "./modes.controller";
import { StatesController } from "./states.controller";
import { WrestlersController } from "./wrestlers.controller";
import { CardService } from "./service/card.service";
import { EngineService } from "./service/engine.service";
import { ModeService } from "./service/mode.service";
import { WrestlerService } from "./service/wrestler.service";

@Module({
  imports: [],
  controllers: [
    CardsController,
    ModesController,
    StatesController,
    WrestlersController
  ],
  components: [CardService, EngineService, ModeService, WrestlerService]
})
export class ApplicationModule {}
