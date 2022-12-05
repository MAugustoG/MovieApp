// -----------------------------------------------------------------------------
// 'INTERNAL' IMPORTS
// -----------------------------------------------------------------------------
import { Staff } from './common/staff.types';

export type MovieCreditsCast = Staff & {
  order: number;
  cast_id: number;
  character: string;
};

export type MovieCreditsCrew = Staff & {
  job: string;
  department: string;
};
