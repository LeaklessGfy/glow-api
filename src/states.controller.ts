import { Post, Controller, Body } from "@nestjs/common";
import { ApiUseTags, ApiResponse, ApiOperation } from "@nestjs/swagger";
import { StateDTO } from "./dto/state.dto";
import { FlowService } from "./service/flow.service";

@ApiUseTags("states")
@Controller("states")
export class StatesController {
  constructor(private readonly flowService: FlowService) {}

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
