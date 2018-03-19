import Mode from "../../wlw-engine/src/models/mode";
import { ApiModelProperty } from "@nestjs/swagger";
import { CardDTO } from "./card.dto";

export class ModeDTO implements Mode {
  @ApiModelProperty() uid: string;
  @ApiModelProperty() name: string;
  @ApiModelProperty() img: string;
  @ApiModelProperty() description: string;
  @ApiModelProperty() numbers: number;
  @ApiModelProperty() team: boolean;
  @ApiModelProperty() winning: string;

  @ApiModelProperty({ isArray: true, type: CardDTO, required: false })
  cards?: CardDTO[];
}
