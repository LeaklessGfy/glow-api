import CombatStat from "../../wlw-engine/src/models/combat-stat";
import { ApiModelProperty } from "@nestjs/swagger";

export class CombatStatDTO implements CombatStat {
  @ApiModelProperty() accuracy: number;
  @ApiModelProperty() damage: number;
  @ApiModelProperty() speed: number;
  @ApiModelProperty() crit: number;
  @ApiModelProperty() dodge: number;
  @ApiModelProperty() agility: number;
  @ApiModelProperty() recovery: number;
  @ApiModelProperty() submission: number;
}
