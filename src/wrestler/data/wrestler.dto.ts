import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ActionDTO } from './action.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { BarDTO } from './bar.dto';
import { CombatDTO } from './combat.dto';
import { CrowdDTO } from './crowd.dto';
import { MoralDTO } from './moral.dto';

@Entity({ name: 'wrestler' })
export class WrestlerDTO {
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

  @ApiModelProperty({ type: Number })
  @Column('int')
  gender: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  category: number;

  @ApiModelProperty({ type: BarDTO })
  @ManyToOne(type => BarDTO)
  health: BarDTO;

  @ApiModelProperty({ type: BarDTO })
  @ManyToOne(type => BarDTO)
  stamina: BarDTO;

  @ApiModelProperty({ type: BarDTO })
  @ManyToOne(type => BarDTO)
  intensity: BarDTO;

  @ApiModelProperty({ isArray: true, type: ActionDTO })
  actions: ActionDTO[];

  @ApiModelProperty({ type: CombatDTO })
  @ManyToOne(type => CombatDTO)
  combat: CombatDTO;

  @ApiModelProperty({ type: MoralDTO })
  @ManyToOne(type => MoralDTO)
  moral: MoralDTO;

  @ApiModelProperty({ type: CrowdDTO })
  @ManyToOne(type => CrowdDTO)
  crowd: CrowdDTO;

  @ApiModelProperty({ isArray: true, type: String })
  status: number[];
}
