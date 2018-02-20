import { Get, Controller, Param } from "@nestjs/common";
import { ApiUseTags, ApiResponse } from "@nestjs/swagger";
import { WrestlerDTO } from "./dto/wrestler.dto";
import { WrestlerService } from "./service/wrestler.service";

@ApiUseTags("wrestlers")
@Controller("wrestlers")
export class WrestlersController {
  constructor(private readonly service: WrestlerService) {}

  @ApiResponse({
    status: 200,
    description: "Find all",
    type: WrestlerDTO,
    isArray: true
  })
  @Get()
  findAll(): WrestlerDTO[] {
    return this.service.findAll();
  }

  @ApiResponse({
    status: 200,
    description: "Find one by uid",
    type: WrestlerDTO
  })
  @Get(":uid")
  findOne(@Param("uid") uid: string): WrestlerDTO {
    return this.service.find(uid);
  }
}
