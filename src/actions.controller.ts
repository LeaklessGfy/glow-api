import { Post, Controller, Body } from "@nestjs/common";
import { ApiUseTags, ApiResponse, ApiOperation } from "@nestjs/swagger";
import { StateDTO } from "./dto/state.dto";
import { EngineService } from "./service/engine.service";

@ApiUseTags("actions")
@Controller("actions")
export class ActionsController {}
