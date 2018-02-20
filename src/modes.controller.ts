import { Get, Controller, Param } from "@nestjs/common";
import { ApiUseTags, ApiResponse } from "@nestjs/swagger";
import { ModeDTO } from "./dto/mode.dto";
import { ModeService } from "./service/mode.service";

@ApiUseTags("modes")
@Controller("modes")
export class ModesController {
  constructor(private readonly service: ModeService) {}

  @ApiResponse({
    status: 200,
    description: "Find all",
    type: ModeDTO,
    isArray: true
  })
  @Get()
  findAll(): ModeDTO[] {
    return this.service.findAll();
  }

  @ApiResponse({
    status: 200,
    description: "Find one by uid",
    type: ModeDTO
  })
  @Get(":uid")
  findOne(@Param("uid") uid: string): ModeDTO {
    return this.service.find(uid);
  }
}
