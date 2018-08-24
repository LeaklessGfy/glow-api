import * as mongoose from 'mongoose';
import { WrestlerDTO } from './wrestler.dto';

export const WrestlerSchema = mongoose.Schema(WrestlerDTO);
