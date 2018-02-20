import { Component } from "@nestjs/common";
import { ModeDTO } from "../dto/mode.dto";

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
