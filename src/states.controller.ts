import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { StateDTO } from './dto/state.dto';
import { EngineService } from './service/engine.service';

@ApiUseTags('states')
@Controller('states')
export class StatesController {
  constructor(private readonly engine: EngineService) {}

  @ApiOperation({
    title: 'Flow',
  })
  @ApiResponse({
    status: 200,
    description: 'Good',
    type: StateDTO,
  })
  @Post('flow')
  flow(@Body() state: StateDTO, @Res() res) {
    // const facade = new EngineFacade(this.engine.getEngine());
    try {
      // res.status(HttpStatus.OK).json(facade.go(state));
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
  }
}
