import { Post, Controller, Body } from "@nestjs/common";
import { ApiUseTags, ApiResponse, ApiOperation } from "@nestjs/swagger";
import { StateDTO } from "./dto/state.dto";
import { getWrestlers } from "../wlw-engine/src/utils/state.utils";
import { WrestlerService } from "./service/wrestler.service";

@ApiUseTags("states")
@Controller("states")
export class StatesController {
  constructor(private readonly wrestler: WrestlerService) {}

  @ApiOperation({
    title: "Reset the state (begining of game)"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: StateDTO
  })
  @Post("init")
  init(@Body() state: StateDTO) {
    state.card = null;
    state.targets = [];
    getWrestlers(state).forEach(w => {
      Object.assign(w, this.wrestler.find(w.uid));
    });

    return state;
  }
}
