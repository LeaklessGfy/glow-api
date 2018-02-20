import { State, Players } from "../../wlw-engine/src/models";
import { ApiModelProperty } from "@nestjs/swagger";
import { ModeDTO } from "./mode.dto";
import { CardDTO } from "./card.dto";

export class StateDTO implements State {
  @ApiModelProperty() viewer: string;
  @ApiModelProperty() turn: number;
  @ApiModelProperty() active: string;
  @ApiModelProperty() targets: string[];
  @ApiModelProperty() next: string[];
  @ApiModelProperty() players: Players;
  @ApiModelProperty() card: CardDTO;
  @ApiModelProperty() mode: ModeDTO;
  reversed?: boolean;
}
