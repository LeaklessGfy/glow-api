import { Get, Controller, Param } from "@nestjs/common";
import { ApiUseTags, ApiResponse } from "@nestjs/swagger";
import { ModeDTO } from "./dto/mode.dto";

@ApiUseTags("modes")
@Controller("modes")
export class ModesController {
  @ApiResponse({
    status: 200,
    description: "Find all",
    type: ModeDTO,
    isArray: true
  })
  @Get()
  findAll(): ModeDTO[] {
    return [];
  }

  @ApiResponse({
    status: 200,
    description: "Find one by uid",
    type: ModeDTO
  })
  @Get(":uid")
  findOne(@Param() params): ModeDTO {
    return new ModeDTO();
  }
}
