import State from "../../wlw-engine/src/models/state";
import { ApiModelProperty } from "@nestjs/swagger";
import { ModeDTO } from "./mode.dto";
import { CardDTO } from "./card.dto";
import { PlayersDTO } from "./players.dto";

export class StateDTO implements State {
  @ApiModelProperty() viewer: string;
  @ApiModelProperty() turn: number;
  @ApiModelProperty() active: string;

  @ApiModelProperty({ isArray: true, type: String })
  targets: string[];

  @ApiModelProperty({ isArray: true, type: String })
  next: string[];

  @ApiModelProperty() players: PlayersDTO;
  @ApiModelProperty() card: number;
  @ApiModelProperty() mode: ModeDTO;
  @ApiModelProperty() state: number;
}
