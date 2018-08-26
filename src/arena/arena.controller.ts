import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';

import { ArenaDTO } from './data/arena.dto';
import { ArenaService } from './arena.service';

@ApiUseTags('arenas')
@Controller('arenas')
export class ArenaController {
  constructor(private readonly service: ArenaService) {}

  @ApiOperation({
    title: 'Find all arenas',
  })
  @ApiResponse({
    status: 200,
    description: 'Good',
    type: ArenaDTO,
    isArray: true,
  })
  @Get()
  findAll(): Promise<ArenaDTO[]> {
    return this.service.findAll();
  }

  @ApiOperation({
    title: 'Find one arena by id',
  })
  @ApiResponse({
    status: 200,
    description: 'Good',
    type: ArenaDTO,
  })
  @Get(':id')
  find(@Param('id') id: number): Promise<ArenaDTO> {
    return this.service.find(id);
  }

  @ApiOperation({
    title: 'Find one arena by uid',
  })
  @ApiResponse({
    status: 200,
    description: 'Good',
    type: ArenaDTO,
  })
  @Get(':uid')
  findUid(@Param('uid') uid: string): Promise<ArenaDTO> {
    return this.service.findUid(uid);
  }
}
