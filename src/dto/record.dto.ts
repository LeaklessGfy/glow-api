import Record from "../../wlw-engine/src/models/record";
import { ApiModelProperty } from "@nestjs/swagger";

export class RecordDTO implements Record {
  @ApiModelProperty() key: string;

  @ApiModelProperty({ required: false })
  msg?: any;

  @ApiModelProperty({ required: false })
  val?: any;
}
