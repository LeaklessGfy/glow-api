import { ApiModelProperty } from '@nestjs/swagger';

export class ActionDTO {
  @ApiModelProperty()
  uid: string;

  @ApiModelProperty()
  name: string;

  @ApiModelProperty()
  type: string;

  @ApiModelProperty()
  image: string;

  @ApiModelProperty()
  description: string;

  @ApiModelProperty()
  stamina: number;

  @ApiModelProperty()
  intensity: number;

  @ApiModelProperty()
  value: number;

  @ApiModelProperty({ isArray: true, type: Number })
  targets: number[];

  @ApiModelProperty({ isArray: true, type: String })
  actuators: string[];
}
