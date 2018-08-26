import { ApiModelProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
