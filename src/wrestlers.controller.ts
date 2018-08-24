import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { WrestlerDTO } from './wrestler.dto';
import { WrestlerService } from './wrestler.service';

@ApiUseTags('wrestlers')
@Controller('wrestlers')
export class WrestlersController {
  constructor(private readonly service: WrestlerService) {}

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
  findAll() {
    console.log(this.service.findAll().then(r => console.log(r)));
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
  findOne(@Param('uid') uid: string): WrestlerDTO {
    return this.service.find(uid);
  }
}
