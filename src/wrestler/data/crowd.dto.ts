import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ApiModelProperty } from '@nestjs/swagger';

@Entity({ name: 'crowd' })
export class CrowdDTO {
  @ApiModelProperty({ type: Number })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  reaction: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  intensity: number;
}
