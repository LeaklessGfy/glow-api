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
        return this.init(state);
      case States.NEW_TURN:
        return this.new(state);
      case States.PLAYER_ACTION:
        return this.play(state);
      default:
        return state;
    }
  }

  private init(state: StateDTO): StateDTO {
    const engine = this.engine.getEngine();
    let newState = engine.newTurn(state);
    newState = engine.distributeHands(newState);
    newState = engine.validateHands(newState);

    return newState;
  }

  private new(state: StateDTO): StateDTO {
    const engine = this.engine.getEngine();
    const next = state.next.length;

    let newState = engine.newTurn(state);
    if (next === 0) {
      newState = engine.distributeHands(newState);
    }
    newState = engine.validateHands(newState);

    return newState;
  }

  private play(state: StateDTO): StateDTO {
    const engine = this.engine.getEngine();
    let newState = engine.playCard(state);
    newState = engine.validateHands(newState);

    return newState;
  }
}
