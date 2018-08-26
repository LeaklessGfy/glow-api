import { ApiModelProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'arena' })
export class ArenaDTO {
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
  @Column({ length: 255 })
  location: string;

  @ApiModelProperty({ type: Number })
  @Column('int')
  audience: string;

  @ApiModelProperty({ type: String })
  @Column('json')
  data: string;
}
