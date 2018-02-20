import Bar from "../../wlw-engine/src/models/bar";
import { ApiModelProperty } from "@nestjs/swagger";

export class BarDTO implements Bar {
  @ApiModelProperty() val: number;
  @ApiModelProperty() max: number;
}
