import Wrestler from "../../wlw-engine/src/models/wrestler";
import Bar from "../../wlw-engine/src/models/bar";
import { CardDTO } from "./card.dto";
import CombatStat from "../../wlw-engine/src/models/combat-stat";
import { ApiModelProperty } from "@nestjs/swagger";

export class WrestlerDTO implements Wrestler {
  @ApiModelProperty() uid: string;
  @ApiModelProperty() name: string;
  @ApiModelProperty() img: string;
  @ApiModelProperty() gender: string;
  @ApiModelProperty() category: string;
  @ApiModelProperty() health: Bar;
  @ApiModelProperty() stamina: Bar;
  @ApiModelProperty() intensity: Bar;
  @ApiModelProperty() cards: string[];
  @ApiModelProperty() hand: CardDTO[];
  @ApiModelProperty() dead: CardDTO[];
  @ApiModelProperty() status: string[];
  @ApiModelProperty() combat: CombatStat;
}
