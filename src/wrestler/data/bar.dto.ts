import { ApiModelProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
