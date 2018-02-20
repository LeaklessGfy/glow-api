import Players from "../../wlw-engine/src/models/players";
import { WrestlerDTO } from "./wrestler.dto";
import { ApiModelProperty } from "@nestjs/swagger";

export class PlayersDTO implements Players {
  @ApiModelProperty() P1?: WrestlerDTO;
  @ApiModelProperty() P2?: WrestlerDTO;
}
