import { ApiModelProperty } from '@nestjs/swagger';

export class CrowdDTO {
  @ApiModelProperty()
  reaction: number;

  @ApiModelProperty()
  intensity: number;
}
