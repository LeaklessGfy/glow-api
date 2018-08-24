import { ApiModelProperty } from '@nestjs/swagger';

export class ModeDTO {
  @ApiModelProperty()
  uid: string;
  @ApiModelProperty()
  name: string;
  @ApiModelProperty()
  img: string;
  @ApiModelProperty()
  description: string;
  @ApiModelProperty()
  numbers: number;
  team?: boolean;
}
