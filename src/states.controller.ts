import { Get, Controller } from "@nestjs/common";
import { ApiUseTags, ApiResponse } from "@nestjs/swagger";
import CoreKernel from "../wlw-engine/src/kernel";
import CoreEngine from "../wlw-engine/src/engine";
import { StateDTO } from "./dto/state.dto";

@ApiUseTags("states")
@Controller("states")
export class StatesController {
  @ApiResponse({
    status: 200,
    description: "Returns the initial state",
    type: StateDTO
  })
  @Get("initial-state")
  getInitialState(): StateDTO {
    const kernel = new CoreKernel();
    const engine = new CoreEngine(kernel);

    return engine.initState();
  }
}
