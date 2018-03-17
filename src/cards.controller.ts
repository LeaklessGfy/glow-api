import {
  Get,
  Controller,
  Param,
  Query,
  Post,
  Body,
  Res,
  HttpStatus
} from "@nestjs/common";
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
    title: "Play the active card"
  })
  @ApiResponse({
    status: 200,
    description: "Good",
    type: StateDTO
  })
  @Post("play")
  cardPlay(@Body() state: StateDTO, @Res() res) {
    try {
      const nState = this.engine.getEngine().playCard(state);
      res.status(HttpStatus.OK).json(nState);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
  }
}
