import * as mongoose from 'mongoose';
import { ActionDTO } from './action.dto';
import { BarDTO } from './bar.dto';
import { CombatDTO } from './combat.dto';
import { CrowdDTO } from './crowd.dto';
import { ModeDTO } from './mode.dto';
import { MoralDTO } from './moral.dto';
import { StateDTO } from './state.dto';
import { WrestlerDTO } from './wrestler.dto';

export const ActionSchema = mongoose.Schema(ActionDTO);
export const BarSchema = mongoose.Schema(BarDTO);
export const CombatSchema = mongoose.Schema(CombatDTO);
export const CrowdSchema = mongoose.Schema(CrowdDTO);
export const ModeSchema = mongoose.Schema(ModeDTO);
export const MoralSchema = mongoose.Schema(MoralDTO);
export const StateSchema = mongoose.Schema(StateDTO);
export const WrestlerSchema = mongoose.Schema(WrestlerDTO);
