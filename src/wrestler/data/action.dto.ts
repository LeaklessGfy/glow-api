import { ApiModelProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'action' })
export class ActionDTO {
  @ApiModelProperty({ type: Number })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty({ type: String })
  @Column({ length: 255 })
  uid: string;

  @ApiModelProperty({ type: String })
  @Column({ length: 255 })
  name: string;

  @ApiModelProperty({ type: String })
  @Column({ length: 255 })
  type: string;

  @ApiModelProperty({ type: String })
  @Column({ length: 255 })
  image: string;

  @ApiModelProperty({ type: String })
  @Column('text')
  description: string;

  @ApiModelProperty({ type: Number })
  @Column('int')
  stamina: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  intensity: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  value: number;

  @ApiModelProperty({ isArray: true, type: Number })
  @Column('json')
  targets: number[];

  @ApiModelProperty({ isArray: true, type: String })
  @Column('json')
  actuators: string[];
}
