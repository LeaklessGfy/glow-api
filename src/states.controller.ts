import { Post, Controller, Body } from "@nestjs/common";
import { ApiUseTags, ApiResponse, ApiOperation } from "@nestjs/swagger";
import { StateDTO } from "./dto/state.dto";
import { getWrestlers } from "../wlw-engine/src/utils/state.utils";
import { WrestlerService } from "./service/wrestler.service";
import { FlowService } from "./service/flow.service";

@ApiUseTags("states")
@Controller("states")
export class StatesController {
  constructor(
    private readonly wrestlerService: WrestlerService,
    private readonly flowService: FlowService
  ) {}

  @ApiOperation({
    title: "Reset the state (begining of game)"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: StateDTO
  })
  @Post("init")
  init(@Body() state: StateDTO): StateDTO {
    state.card = null;
    state.targets = [];
    getWrestlers(state).forEach(w => {
      Object.assign(w, this.wrestlerService.find(w.uid));
    });

    return state;
  }

  @ApiOperation({
    title: "Flow"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: StateDTO
  })
  @Post("flow")
  flow(@Body() state: StateDTO): StateDTO {
    return this.flowService.flow(state);
  }
}
