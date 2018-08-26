import { ApiModelProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'mode' })
export class ModeDTO {
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
  image: string;

  @ApiModelProperty({ type: String })
  @Column('text')
  description: string;

  @ApiModelProperty({ type: Number })
  @Column('int')
  players: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  groups: number;
}
