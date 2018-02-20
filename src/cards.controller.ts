import { Get, Controller, Param, Query } from "@nestjs/common";
import { ApiUseTags, ApiResponse, ApiImplicitQuery } from "@nestjs/swagger";
import { CardDTO } from "./dto/card.dto";
import { CardService } from "./service/card.service";

@ApiUseTags("cards")
@Controller("cards")
export class CardsController {
  constructor(private readonly service: CardService) {}

  @ApiImplicitQuery({ name: "uids", required: false, type: String })
  @ApiResponse({
    status: 200,
    description: "Find all by uids",
    type: CardDTO,
    isArray: true
  })
  @Get()
  findAll(@Query() params): CardDTO[] {
    const uids = params.uids ? JSON.parse(params.uids) : [];
    return this.service.findAll(uids);
  }

  @ApiResponse({
    status: 200,
    description: "Find one by uid",
    type: CardDTO
  })
  @Get(":uid")
  findOne(@Param("uid") uid: string): CardDTO {
    return this.service.find(uid);
  }
}
