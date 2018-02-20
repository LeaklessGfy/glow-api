import { Component } from "@nestjs/common";
import { ModeDTO } from "../dto/mode.dto";
//import * as M from "../../wlw-engine/src/resources/modes";

@Component()
export class ModeService {
  private readonly modes: ModeDTO[];

  constructor() {
    this.modes = [
      {
        uid: "Normal2Versus",
        name: "Normal",
        img:
          "http://cdn1.thecomeback.com/wp-content/uploads/2017/01/roman-reigns-goldberg-wwe-raw.jpg",
        description: "One vs. One",
        numbers: 2
      }
    ];
  }

  findAll(): ModeDTO[] {
    return this.modes;
  }

  find(uid: string): ModeDTO {
    return null;
  }
}
