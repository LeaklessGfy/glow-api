import { Get, Controller } from "@nestjs/common";
import { ApiUseTags, ApiResponse } from "@nestjs/swagger";
import CoreKernel from "../wlw-engine/src/kernel";
import CoreEngine from "../wlw-engine/src/engine";
import { StateDTO } from "./dto/state.dto";
import { EngineService } from "./service/engine.service";

@ApiUseTags("states")
@Controller("states")
export class StatesController {
  constructor(private readonly service: EngineService) {}

  @ApiResponse({
    status: 200,
    description: "Returns the initial state",
    type: StateDTO
  })
  @Get("initial-state")
  getInitialState(): StateDTO {
    return this.service.getEngine().getInitialState();
  }
}
