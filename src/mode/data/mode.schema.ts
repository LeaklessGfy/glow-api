import * as mongoose from 'mongoose';
import { ModeDTO } from './mode.dto';

export const ModeSchema = mongoose.Schema(ModeDTO);
