import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { InsertResult } from 'typeorm';
import { MatchDTO } from './data/match.dto';
import { MatchService } from './match.service';

@ApiUseTags('matches')
@Controller('matches')
export class MatchController {
  constructor(private readonly service: MatchService) {}

  @ApiOperation({
    title: 'Find all matches',
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
    title: 'Find one match by id',
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

  @ApiOperation({
    title: 'Create a match',
  })
  @ApiResponse({
    status: 200,
    description: 'Good',
    type: MatchDTO,
  })
  @Post()
  create(@Body() matchDTO: MatchDTO): Promise<InsertResult> {
    return this.service.create(matchDTO);
  }
}
