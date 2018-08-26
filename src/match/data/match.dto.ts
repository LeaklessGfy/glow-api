import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ApiModelProperty } from '@nestjs/swagger';
import { ModeDTO } from '../../mode/data/mode.dto';
import { WrestlerDTO } from '../../wrestler/data/wrestler.dto';

@Entity({ name: 'match' })
export class MatchDTO {
  @ApiModelProperty({ type: Number })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty({ type: Number })
  @ManyToOne(type => ModeDTO, { nullable: false })
  mode: ModeDTO;

  @ApiModelProperty({ type: WrestlerDTO, isArray: true })
  @ManyToMany(type => WrestlerDTO, { nullable: false })
  @JoinTable()
  players: WrestlerDTO[];

  states: any[];

  @ApiModelProperty({ type: Object })
  @Column('json')
  mapper: Map<String, Number>;

  referee: any;
  announcer: any;
  commentators: any;
  winner: Number;
}
