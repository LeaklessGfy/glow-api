import { Module } from "@nestjs/common";
import { ActionsController } from "./actions.controller";
import { ModesController } from "./modes.controller";
import { StatesController } from "./states.controller";
import { WrestlersController } from "./wrestlers.controller";

@Module({
  imports: [],
  controllers: [
    ActionsController,
    ModesController,
    StatesController,
    WrestlersController
  ],
  components: []
})
export class ApplicationModule {}
