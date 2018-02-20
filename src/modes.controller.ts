import { Get, Controller } from "@nestjs/common";
import { ApiUseTags, ApiResponse } from "@nestjs/swagger";
import { ModeDTO } from "./DTO/mode.dto";

@ApiUseTags("modes")
@Controller("modes")
export class ModesController {
  @ApiResponse({
    status: 200,
    description: "Find all modes",
    type: ModeDTO,
    isArray: true
  })
  @Get()
  findAll(): ModeDTO[] {
    return [];
  }
}
