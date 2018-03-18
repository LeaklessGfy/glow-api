import { Component } from "@nestjs/common";
import Engine from "../../wlw-engine/src/models/engine";
import CoreEngine from "../../wlw-engine/src/engine";
import * as Strategies from "../../wlw-engine/src/resources/strategies";
import * as Actuators from "../../wlw-engine/src/resources/actuators";
import Mutator from "../../wlw-engine/src/mutator";

@Component()
export class EngineService {
  private readonly engine: Engine;

  constructor() {
    const mutator = new Mutator(
      new Strategies.Distributor(),
      new Strategies.Validator(),
      new Strategies.Operator([
        new Actuators.DamageActuator(),
        new Actuators.MirrorActuator(),
        new Actuators.PinActuator(),
        new Actuators.RestActuator(),
        new Actuators.TimewrapActuator()
      ]),
      new Strategies.CPU(),
      new Strategies.Winning()
    );
    this.engine = new CoreEngine(mutator);
  }

  getEngine(): Engine {
    return this.engine;
  }
}
