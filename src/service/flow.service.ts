import { Component } from "@nestjs/common";
import { EngineService } from "./engine.service";
import { StateDTO } from "../dto/state.dto";
import * as States from "../../wlw-engine/src/consts/states";

@Component()
export class FlowService {
  constructor(private readonly engine: EngineService) {}

  flow(state: StateDTO): StateDTO {
    switch (state.state) {
      case States.INIT:
      case States.NEW_TURN:
        return this.init(state);
      case States.PLAYER_ACTION:
        return this.play(state);
      default:
        return state;
    }
  }

  private init(state: StateDTO): StateDTO {
    const engine = this.engine.getEngine();
    const turn = engine.newTurn(state);
    const distribute = engine.distributeHand(turn);
    const validate = engine.validateHand(distribute);

    return validate;
  }

  private play(state: StateDTO): StateDTO {
    const engine = this.engine.getEngine();
    const play = engine.playCard(state);
    const validate = engine.validateHand(play);

    return play;
  }
}
