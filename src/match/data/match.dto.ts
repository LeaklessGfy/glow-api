import { ApiModelProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ModeDTO } from '../../mode/data/mode.dto';
import { WrestlerDTO } from '../../wrestler/data/wrestler.dto';

@Entity({ name: 'match' })
export class MatchDTO {
  @ApiModelProperty({ type: Number })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty({ type: Number })
  @ManyToOne(type => ModeDTO)
  mode: ModeDTO;

  @ApiModelProperty({ type: WrestlerDTO, isArray: true })
  @ManyToMany(type => WrestlerDTO)
  @JoinTable()
  players: WrestlerDTO[];

  states: any[];

  @ApiModelProperty({ type: Object })
  mapper: Map<String, Number>;

  referee: any;
  announcer: any;
  commentators: any;
  winner: Number;
}
