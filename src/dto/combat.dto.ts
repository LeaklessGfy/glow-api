import { ApiModelProperty } from '@nestjs/swagger';

export class CombatDTO {
  @ApiModelProperty()
  accuracy: number;
  @ApiModelProperty()
  damage: number;
  @ApiModelProperty()
  speed: number;
  @ApiModelProperty()
  crit: number;
  @ApiModelProperty()
  dodge: number;
  @ApiModelProperty()
  agility: number;
  @ApiModelProperty()
  recovery: number;
  @ApiModelProperty()
  submission: number;
}
