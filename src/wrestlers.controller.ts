import { Get, Controller, Param } from "@nestjs/common";
import { ApiUseTags, ApiResponse, ApiOperation } from "@nestjs/swagger";
import { WrestlerDTO } from "./dto/wrestler.dto";
import { WrestlerService } from "./service/wrestler.service";

@ApiUseTags("wrestlers")
@Controller("wrestlers")
export class WrestlersController {
  constructor(private readonly service: WrestlerService) {}

  @ApiOperation({
    title: "Find all wrestlers"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: WrestlerDTO,
    isArray: true
  })
  @Get()
  findAll(): WrestlerDTO[] {
    return this.service.findAll();
  }

  @ApiOperation({
    title: "Find one wrestler by uid"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: WrestlerDTO
  })
  @Get(":uid")
  findOne(@Param("uid") uid: string): WrestlerDTO {
    return this.service.find(uid);
  }
}
