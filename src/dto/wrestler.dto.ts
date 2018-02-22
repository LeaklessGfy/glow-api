import Wrestler from "../../wlw-engine/src/models/wrestler";
import { BarDTO } from "./bar.dto";
import { CardDTO } from "./card.dto";
import CombatStat from "../../wlw-engine/src/models/combat-stat";
import { ApiModelProperty } from "@nestjs/swagger";

export class WrestlerDTO implements Wrestler {
  @ApiModelProperty() uid: string;
  @ApiModelProperty() name: string;
  @ApiModelProperty() img: string;
  @ApiModelProperty() gender: string;
  @ApiModelProperty() category: string;
  @ApiModelProperty() health: BarDTO;
  @ApiModelProperty() stamina: BarDTO;
  @ApiModelProperty() intensity: BarDTO;

  @ApiModelProperty({ isArray: true, type: String })
  cards: CardDTO[];

  @ApiModelProperty({ isArray: true, type: CardDTO })
  hand: CardDTO[];

  @ApiModelProperty({ isArray: true, type: CardDTO })
  dead: CardDTO[];

  @ApiModelProperty({ isArray: true, type: String })
  status: string[];

  @ApiModelProperty() combat: CombatStat;
}
