import { Get, Controller, Param, Query } from "@nestjs/common";
import { ApiUseTags, ApiResponse, ApiOperation } from "@nestjs/swagger";
import { CardDTO } from "./dto/card.dto";
import { CardService } from "./service/card.service";

@ApiUseTags("cards")
@Controller("cards")
export class CardsController {
  constructor(private readonly service: CardService) {}

  @ApiOperation({
    title: "Find one card by uid"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: CardDTO
  })
  @Get(":uid")
  findOne(@Param("uid") uid: string): CardDTO {
    return this.service.find(uid);
  }
}
