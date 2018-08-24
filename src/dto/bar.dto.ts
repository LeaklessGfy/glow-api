import { ApiModelProperty } from '@nestjs/swagger';

export class BarDTO {
  @ApiModelProperty()
  val: number;
  @ApiModelProperty()
  max: number;
}
