import { Post, Controller, Body } from "@nestjs/common";
import { ApiUseTags, ApiResponse, ApiOperation } from "@nestjs/swagger";
import { StateDTO } from "./dto/state.dto";
import { EngineService } from "./service/engine.service";

@ApiUseTags("actions")
@Controller("actions")
export class ActionsController {
  constructor(private readonly engine: EngineService) {}

  @ApiOperation({
    title: "Make card play"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: StateDTO
  })
  @Post("card-play")
  cardPlay(@Body() state: StateDTO) {
    return this.engine.getEngine().playCard(state);
  }

  @ApiOperation({
    title: "Make card distribution"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: StateDTO
  })
  @Post("card-distribute")
  cardDistribute(@Body() state: StateDTO) {
    return this.engine.getEngine().distributeCards(state);
  }
}
