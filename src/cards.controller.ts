import { Get, Controller, Param, Query, Post, Body } from "@nestjs/common";
import { ApiUseTags, ApiResponse, ApiOperation } from "@nestjs/swagger";
import { CardService } from "./service/card.service";
import { EngineService } from "./service/engine.service";
import { CardDTO } from "./dto/card.dto";
import { StateDTO } from "./dto/state.dto";

@ApiUseTags("cards")
@Controller("cards")
export class CardsController {
  constructor(
    private readonly service: CardService,
    private readonly engine: EngineService
  ) {}

  @ApiOperation({
    title: "Find all cards"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: CardDTO,
    isArray: true
  })
  @Get()
  findAll(): CardDTO[] {
    return this.service.findAll();
  }

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

  @ApiOperation({
    title: "Distribute hand for all players"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: StateDTO
  })
  @Post("distribute")
  cardDistribute(@Body() state: StateDTO) {
    return this.engine.getEngine().distributeHands(state);
  }

  @ApiOperation({
    title: "Validate hand for all players"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: StateDTO
  })
  @Post("validate")
  cardValidate(@Body() state: StateDTO) {
    return this.engine.getEngine().validateHands(state);
  }

  @ApiOperation({
    title: "Play the active card"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: StateDTO
  })
  @Post("play")
  cardPlay(@Body() state: StateDTO) {
    return this.engine.getEngine().playCard(state);
  }

  @ApiOperation({
    title: "Choose a random valid active card"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: StateDTO
  })
  @Post("random")
  cardRandom(@Body() state: StateDTO) {
    return this.engine.getEngine().randomCard(state);
  }
}
