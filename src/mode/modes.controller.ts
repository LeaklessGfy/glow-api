import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { ModeDTO } from './data/mode.dto';
import { ModesService } from './modes.service';

@ApiUseTags('modes')
@Controller('modes')
export class ModesController {
  constructor(private readonly service: ModesService) {}

  @ApiOperation({
    title: 'Find all modes'
  })
  @ApiResponse({
    status: 200,
    description: 'Good',
    type: ModeDTO,
    isArray: true
  })
  @Get()
  findAll(): Promise<ModeDTO[]> {
    return this.service.findAll();
  }

  @ApiOperation({
    title: 'Find one mode by id'
  })
  @ApiResponse({
    status: 200,
    description: 'Good',
    type: ModeDTO
  })
  @Get(':id')
  find(@Param('id') id: number): Promise<ModeDTO> {
    return this.service.find(id);
  }

  @ApiOperation({
    title: 'Find one mode by uid'
  })
  @ApiResponse({
    status: 200,
    description: 'Good',
    type: ModeDTO
  })
  @Get(':uid')
  findUid(@Param('uid') uid: string): Promise<ModeDTO> {
    return this.service.findUid(uid);
  }
}
