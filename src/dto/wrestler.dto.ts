import Wrestler from "../../wlw-engine/src/models/wrestler";
import { BarDTO } from "./bar.dto";
import { CardDTO } from "./card.dto";
import { CombatStatDTO } from "./combat-stat.dto";
import { ApiModelProperty } from "@nestjs/swagger";

export class WrestlerDTO implements Wrestler {
  @ApiModelProperty() uid: string;
  @ApiModelProperty() name: string;
  @ApiModelProperty() img: string;
  @ApiModelProperty() gender: number;
  @ApiModelProperty() category: number;
  @ApiModelProperty() health: BarDTO;
  @ApiModelProperty() stamina: BarDTO;
  @ApiModelProperty() intensity: BarDTO;

  @ApiModelProperty({ isArray: true, type: CardDTO })
  deck: CardDTO[];

  @ApiModelProperty({ isArray: true, type: CardDTO })
  hand: CardDTO[];

  @ApiModelProperty({ isArray: true, type: CardDTO })
  dead: CardDTO[];

  @ApiModelProperty({ isArray: true, type: String })
  status: string[];

  @ApiModelProperty() combat: CombatStatDTO;
}
