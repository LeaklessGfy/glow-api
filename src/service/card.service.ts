import { Component } from "@nestjs/common";
import { EngineService } from "./engine.service";
import { CardDTO } from "../dto/card.dto";

@Component()
export class CardService {
  private readonly cards: CardDTO[] = [];

  findAll(uids: string[]): CardDTO[] {
    return this.cards;
  }

  find(uid: string): CardDTO {
    return this.cards.find(card => card.uid === uid);
  }
}
