import { Post, Controller } from "@nestjs/common";
import { ApiUseTags, ApiResponse } from "@nestjs/swagger";
import { StateDTO } from "./dto/state.dto";

@ApiUseTags("actions")
@Controller("actions")
export class ActionsController {
  @ApiResponse({
    status: 200,
    description: "Make a card play",
    type: StateDTO
  })
  @Post("card-play")
  cardPlay() {
    return new StateDTO();
  }
}
