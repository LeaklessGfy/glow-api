import { Post, Controller, Body } from "@nestjs/common";
import { ApiUseTags, ApiResponse, ApiOperation } from "@nestjs/swagger";
import { StateDTO } from "./dto/state.dto";
import { EngineService } from "./service/engine.service";

@ApiUseTags("turns")
@Controller("turns")
export class TurnsController {
  constructor(private readonly service: EngineService) {}

  @ApiOperation({
    title: "New turn"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: StateDTO
  })
  @Post("new")
  newTurn(@Body() state: StateDTO) {
    return this.service.getEngine().newTurn(state);
  }
}
