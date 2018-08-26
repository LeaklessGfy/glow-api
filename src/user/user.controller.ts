import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { Controller, Get, Param } from '@nestjs/common';

import { UserDTO } from './data/user.dto';
import { UserService } from './user.service';

@ApiUseTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @ApiOperation({
    title: 'Find all modes',
  })
  @ApiResponse({
    status: 200,
    description: 'Good',
    type: UserDTO,
    isArray: true,
  })
  @Get()
  findAll(): Promise<UserDTO[]> {
    return this.service.findAll();
  }

  @ApiOperation({
    title: 'Find one mode by id',
  })
  @ApiResponse({
    status: 200,
    description: 'Good',
    type: UserDTO,
  })
  @Get(':id')
  find(@Param('id') id: number): Promise<UserDTO> {
    return this.service.find(id);
  }
}
