import { ApiModelProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'combat' })
export class CombatDTO {
  @ApiModelProperty({ type: Number })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  accuracy: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  damage: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  speed: number;

  @ApiModelProperty({ type: Number })
  crit: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  dodge: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  agility: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  recovery: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  submission: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  luck: number;
}
