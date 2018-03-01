import { Component } from "@nestjs/common";
import { ModeDTO } from "../dto/mode.dto";
import * as M from "../../wlw-engine/src/resources/modes";

@Component()
export class ModeService {
  private readonly modes: ModeDTO[] = [new M.Normal()];

  findAll(): ModeDTO[] {
    return this.modes;
  }

  find(uid: string): ModeDTO {
    return this.modes.find(mode => mode.uid === uid);
  }
}
