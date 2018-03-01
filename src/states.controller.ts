import { Post, Controller, Body, Res, HttpStatus } from "@nestjs/common";
import { ApiUseTags, ApiResponse, ApiOperation } from "@nestjs/swagger";
import { StateDTO } from "./dto/state.dto";
import EngineFacade from "../wlw-engine/src/engine.facade";
import { EngineService } from "./service/engine.service";

@ApiUseTags("states")
@Controller("states")
export class StatesController {
  constructor(private readonly engine: EngineService) {}

  @ApiOperation({
    title: "Flow"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: StateDTO
  })
  @Post("flow")
  flow(@Body() state: StateDTO, @Res() res): StateDTO {
    const facade = new EngineFacade(this.engine.getEngine());
    try {
      return facade.go(state);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
  }
}
