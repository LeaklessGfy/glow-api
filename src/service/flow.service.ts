import { Component } from "@nestjs/common";
import { EngineService } from "./engine.service";
import { StateDTO } from "../dto/state.dto";
import * as STATE from "../../wlw-engine/src/consts/states";

@Component()
export class FlowService {
  constructor(private readonly engine: EngineService) {}

  flow(state: StateDTO): StateDTO {
    switch (state.state) {
      case STATE.REQUEST_INIT:
        return this.init(state);
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
}
