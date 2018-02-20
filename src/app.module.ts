import { Module } from "@nestjs/common";
import { StatesController } from "./states.controller";
import { ActionsController } from "./actions.controller";
import { ModesController } from "./modes.controller";

@Module({
  imports: [],
  controllers: [StatesController, ActionsController, ModesController],
  components: []
})
export class ApplicationModule {}
