import Players from "../../wlw-engine/src/models/players";
import { WrestlerDTO } from "./wrestler.dto";
import { ApiModelProperty } from "@nestjs/swagger";

export class PlayersDTO implements Players {
  @ApiModelProperty({ required: false })
  P1?: WrestlerDTO;

  @ApiModelProperty({ required: false })
  P2?: WrestlerDTO;

  @ApiModelProperty({ required: false })
  CPU1?: WrestlerDTO;
}
