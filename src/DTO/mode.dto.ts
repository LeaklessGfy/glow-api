import Mode from "../../wlw-engine/src/models/mode";
import { ApiModelProperty } from "@nestjs/swagger";

export class ModeDTO implements Mode {
  @ApiModelProperty() id?: string;
  @ApiModelProperty() name: string;
  @ApiModelProperty() img: string;
  description: string;
  numbers: Number;
  team?: boolean;
}
