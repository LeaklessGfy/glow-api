import Card from "../../wlw-engine/src/models/card";
import { ApiModelProperty } from "@nestjs/swagger";

export class CardDTO implements Card {
  @ApiModelProperty() uid: string;
  @ApiModelProperty() name: string;
  @ApiModelProperty() img: string;
  @ApiModelProperty() description: string;
  requirements?: any;
  @ApiModelProperty() stamina: number;
  @ApiModelProperty() intensity: number;
  @ApiModelProperty() damage?: number;
  @ApiModelProperty() targets: string[];
  @ApiModelProperty() reverseable: boolean;
  @ApiModelProperty() rarity: string;
  @ApiModelProperty() valid?: boolean;

  preOperate(mutable, engine) {}
  operate(mutable, engine) {}
  postOperate(mutable, engine) {}
}
