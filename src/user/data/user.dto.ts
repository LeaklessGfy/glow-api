import { ApiModelProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserDTO {
  @ApiModelProperty({ type: Number })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty({ type: String })
  @Column({ length: 255 })
  username: string;

  @ApiModelProperty({ type: String })
  @Column({ length: 255 })
  password: string;

  @ApiModelProperty({ type: String })
  @Column({ length: 255 })
  email: string;

  @ApiModelProperty({ type: Number })
  @Column('int')
  diamonds: number;
}
