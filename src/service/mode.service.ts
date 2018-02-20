import { Component } from "@nestjs/common";
import { ModeDTO } from "../dto/mode.dto";
//import * as M from "../../wlw-engine/src/resources/modes";

@Component()
export class ModeService {
  private readonly modes: ModeDTO[];

  constructor() {
    this.modes = [];
  }

  findAll(): ModeDTO[] {
    return this.modes;
  }

  find(uid: string): ModeDTO {
    return null;
  }
}
