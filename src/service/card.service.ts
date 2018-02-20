import { Component } from "@nestjs/common";
import { EngineService } from "./engine.service";
import { CardDTO } from "../dto/card.dto";

@Component()
export class CardService {
  constructor(private readonly engine: EngineService) {}

  findAll(uids: string[]): CardDTO[] {
    const kernel = this.engine.getKernel();
    if (uids.length === 0) {
      //return kernel.getAll();
    }
    return uids.map(uid => kernel.get(uid));
  }

  find(uid: string): CardDTO {
    return this.engine.getKernel().get(uid);
  }
}
