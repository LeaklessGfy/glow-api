import * as mongoose from 'mongoose';
import { ActionDTO } from './dto/action.dto';
import { BarDTO } from './dto/bar.dto';
import { CombatDTO } from './dto/combat.dto';
import { CrowdDTO } from './dto/crowd.dto';
import { ModeDTO } from './dto/mode.dto';
import { MoralDTO } from './dto/moral.dto';
import { StateDTO } from './dto/state.dto';

export const ActionSchema = mongoose.Schema(ActionDTO);
export const BarSchema = mongoose.Schema(BarDTO);
export const CombatSchema = mongoose.Schema(CombatDTO);
export const CrowdSchema = mongoose.Schema(CrowdDTO);
export const MoralSchema = mongoose.Schema(MoralDTO);
export const StateSchema = mongoose.Schema(StateDTO);
