import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ApiModelProperty } from '@nestjs/swagger';

@Entity({ name: 'bar' })
export class BarDTO {
  @ApiModelProperty({ type: Number })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  value: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  maximum: number;
}
