import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { WrestlerDTO } from './data/wrestler.dto';
import { WrestlersService } from './wrestlers.service';

@ApiUseTags('wrestlers')
@Controller('wrestlers')
export class WrestlersController {
  constructor(private readonly service: WrestlersService) {}

  @ApiOperation({
    title: 'Find all wrestlers',
  })
  @ApiResponse({
    status: 200,
    description: 'Good',
    type: WrestlerDTO,
    isArray: true,
  })
  @Get()
  findAll(): Promise<WrestlerDTO[]> {
    return this.service.findAll();
  }

  @ApiOperation({
    title: 'Find one wrestler by uid',
  })
  @ApiResponse({
    status: 200,
    description: 'Good',
    type: WrestlerDTO,
  })
  @Get(':uid')
  findOne(@Param('uid') uid: string): Promise<WrestlerDTO> {
    return this.service.find(uid);
  }
}
