import { Component } from "@nestjs/common";
import { WrestlerDTO } from "../dto/wrestler.dto";

@Component()
export class WrestlerService {
  private readonly wrestlers: WrestlerDTO[];

  constructor() {
    this.wrestlers = [];
  }

  findAll(): WrestlerDTO[] {
    return this.wrestlers;
  }

  find(uid: string): WrestlerDTO {
    return null;
  }
}
