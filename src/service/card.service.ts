import { Component } from "@nestjs/common";
import { CardDTO } from "../dto/card.dto";
import * as C from "../../wlw-engine/src/resources/cards";

@Component()
export class CardService {
  private readonly cards: CardDTO[] = [new C.Ddt()];

  findAll(): CardDTO[] {
    return this.cards;
  }

  find(uid: string): CardDTO {
    return this.cards.find(card => card.uid === uid);
  }
}
