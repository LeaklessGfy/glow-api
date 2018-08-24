import { ApiModelProperty } from "@nestjs/swagger";

export class MoralDTO {
  @ApiModelProperty()
  ego: number;

  @ApiModelProperty()
  respect: number;

  @ApiModelProperty()
  perseverance: number;

  @ApiModelProperty()
  loyalty: number;

  @ApiModelProperty()
  boldness: number;

  @ApiModelProperty()
  aggresivity: number;
}
