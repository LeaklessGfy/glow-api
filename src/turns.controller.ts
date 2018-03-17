import { Post, Controller, Body, Res, HttpStatus } from "@nestjs/common";
import { ApiUseTags, ApiResponse, ApiOperation } from "@nestjs/swagger";
import { StateDTO } from "./dto/state.dto";
import { EngineService } from "./service/engine.service";

@ApiUseTags("turns")
@Controller("turns")
export class TurnsController {
  constructor(private readonly engine: EngineService) {}

  @ApiOperation({
    title: "New turn"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: StateDTO
  })
  @Post("new")
  newTurn(@Body() state: StateDTO, @Res() res) {
    try {
      const nState = this.engine.getEngine().newTurn(state);
      res.status(HttpStatus.OK).json(nState);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
  }
}
