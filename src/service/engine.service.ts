import { Component } from "@nestjs/common";
import Kernel from "../../wlw-engine/src/models/kernel";
import Engine from "../../wlw-engine/src/models/engine";
import CoreKernel from "../../wlw-engine/src/kernel";
import CoreEngine from "../../wlw-engine/src/engine";
import Ddt from "../../wlw-engine/src/resources/cards/banals/ddt.card";

@Component()
export class EngineService {
  private readonly kernel: Kernel;
  private readonly engine: Engine;

  constructor() {
    this.kernel = new CoreKernel();
    this.engine = new CoreEngine(this.kernel);
  }

  getKernel(): Kernel {
    return this.kernel;
  }

  getEngine(): Engine {
    return this.engine;
  }
}
