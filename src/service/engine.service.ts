import { Component } from "@nestjs/common";
import Engine from "../../wlw-engine/src/models/engine";
import CoreEngine from "../../wlw-engine/src/engine";
import * as Strategies from "../../wlw-engine/src/strategies/core";
import * as Actuators from "../../wlw-engine/src/resources/actuators";
import Mutator from "../../wlw-engine/src/mutator";

@Component()
export class EngineService {
  private readonly engine: Engine;

  constructor() {
    const mutator = new Mutator(
      new Strategies.CardStrategy(),
      new Strategies.OperatorStrategy([
        new Actuators.DamageActuator(),
        new Actuators.MirrorActuator(),
        new Actuators.PinActuator(),
        new Actuators.RestActuator(),
        new Actuators.TimewrapActuator()
      ]),
      new Strategies.CPUStrategy()
    );
    this.engine = new CoreEngine(mutator);
  }

  getEngine(): Engine {
    return this.engine;
  }
}
