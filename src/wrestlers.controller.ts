import { Get, Controller, Param } from "@nestjs/common";
import { ApiUseTags, ApiResponse } from "@nestjs/swagger";
import { WrestlerDTO } from "./DTO/wrestler.dto";

@ApiUseTags("wrestlers")
@Controller("wrestlers")
export class WrestlersController {
  @ApiResponse({
    status: 200,
    description: "Find all",
    type: WrestlerDTO,
    isArray: true
  })
  @Get()
  findAll(): WrestlerDTO[] {
    return [];
  }

  @ApiResponse({
    status: 200,
    description: "Find one by uid",
    type: WrestlerDTO
  })
  @Get(":uid")
  findOne(@Param() params): WrestlerDTO {
    return new WrestlerDTO();
  }
}
