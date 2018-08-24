import { ApiModelProperty } from '@nestjs/swagger';
import { ModeDTO } from './mode.dto';
import { WrestlerDTO } from './wrestler.dto';

export class StateDTO {
  @ApiModelProperty()
  viewer: string;

  @ApiModelProperty()
  turn: number;

  @ApiModelProperty()
  active: string;

  @ApiModelProperty({ isArray: true, type: String })
  targets: string[];

  @ApiModelProperty({ isArray: true, type: String })
  next: string[];

  @ApiModelProperty({ isArray: true, type: WrestlerDTO })
  players: WrestlerDTO[];

  @ApiModelProperty()
  card: number;

  @ApiModelProperty()
  mode: ModeDTO;

  @ApiModelProperty()
  state: number;
}
