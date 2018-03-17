import Mode from "../../wlw-engine/src/models/mode";
import { ApiModelProperty } from "@nestjs/swagger";

export class ModeDTO implements Mode {
  @ApiModelProperty() uid: string;
  @ApiModelProperty() name: string;
  @ApiModelProperty() img: string;
  @ApiModelProperty() description: string;
  @ApiModelProperty() numbers: number;
  @ApiModelProperty() team: boolean;
  @ApiModelProperty() winning: string;
}
