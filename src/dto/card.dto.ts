import Card from "../../wlw-engine/src/models/card";
import { ApiModelProperty } from "@nestjs/swagger";

export class CardDTO implements Card {
  @ApiModelProperty() uid: string;

  @ApiModelProperty({ isArray: true, type: String })
  actuators: string[];

  @ApiModelProperty() name: string;
  @ApiModelProperty() img: string;
  @ApiModelProperty() description: string;
  requirements?: any;
  @ApiModelProperty() stamina: number;
  @ApiModelProperty() intensity: number;

  @ApiModelProperty({ required: false })
  damage?: number;

  @ApiModelProperty({ isArray: true, type: String })
  targets: number[];

  @ApiModelProperty() rarity: number;

  @ApiModelProperty({ required: false })
  blockable?: boolean;

  @ApiModelProperty({ required: false })
  reverseable?: boolean;

  @ApiModelProperty({ required: false })
  valid?: boolean;
}
