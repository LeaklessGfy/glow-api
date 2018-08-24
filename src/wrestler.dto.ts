import { ApiModelProperty } from '@nestjs/swagger';
import { ActionDTO } from './action.dto';
import { BarDTO } from './bar.dto';
import { CombatDTO } from './combat.dto';
import { CrowdDTO } from './crowd.dto';
import { MoralDTO } from './moral.dto';

export class WrestlerDTO {
  @ApiModelProperty()
  uid: string;

  @ApiModelProperty()
  name: string;

  @ApiModelProperty()
  image: string;

  @ApiModelProperty()
  gender: number;

  @ApiModelProperty()
  category: number;

  @ApiModelProperty()
  health: BarDTO;

  @ApiModelProperty()
  stamina: BarDTO;

  @ApiModelProperty()
  intensity: BarDTO;

  @ApiModelProperty({ isArray: true, type: ActionDTO })
  actions: ActionDTO[];

  @ApiModelProperty()
  combat: CombatDTO;

  @ApiModelProperty()
  moral: MoralDTO;

  @ApiModelProperty()
  crowd: CrowdDTO;

  @ApiModelProperty({ isArray: true, type: String })
  status: number[];
}
