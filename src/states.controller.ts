import { Get, Controller } from "@nestjs/common";
import { ApiUseTags, ApiResponse, ApiOperation } from "@nestjs/swagger";
import { StateDTO } from "./dto/state.dto";
import { EngineService } from "./service/engine.service";

@ApiUseTags("states")
@Controller("states")
export class StatesController {
  constructor(private readonly service: EngineService) {}
}
