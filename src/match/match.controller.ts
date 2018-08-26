import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';

import { MatchDTO } from './data/match.dto';
import { MatchService } from './match.service';

@ApiUseTags('matches')
@Controller('matches')
export class MatchController {
  constructor(private readonly service: MatchService) {}

  @ApiOperation({
    title: 'Find all arenas',
  })
  @ApiResponse({
    status: 200,
    description: 'Good',
    type: MatchDTO,
    isArray: true,
  })
  @Get()
  findAll(): Promise<MatchDTO[]> {
    return this.service.findAll();
  }

  @ApiOperation({
    title: 'Find one arena by id',
  })
  @ApiResponse({
    status: 200,
    description: 'Good',
    type: MatchDTO,
  })
  @Get(':id')
  find(@Param('id') id: number): Promise<MatchDTO> {
    return this.service.find(id);
  }
}
