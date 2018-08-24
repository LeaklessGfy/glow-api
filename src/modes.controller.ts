import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { ModeDTO } from './dto/mode.dto';
import { ModeService } from './mode.service';

@ApiUseTags('modes')
@Controller('modes')
export class ModesController {
  constructor(private readonly service: ModeService) {}

  @ApiOperation({
    title: 'Find all modes',
  })
  @ApiResponse({
    status: 200,
    description: 'Good',
    type: ModeDTO,
    isArray: true,
  })
  @Get()
  findAll(): ModeDTO[] {
    return this.service.findAll();
  }

  @ApiOperation({
    title: 'Find one card by uid',
  })
  @ApiResponse({
    status: 200,
    description: 'Good',
    type: ModeDTO,
  })
  @Get(':uid')
  findOne(@Param('uid') uid: string): ModeDTO {
    return this.service.find(uid);
  }
}
