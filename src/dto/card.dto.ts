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
  targets: string[];

  @ApiModelProperty() reverseable: boolean;
  @ApiModelProperty() rarity: string;

  @ApiModelProperty() valid: boolean;
}
