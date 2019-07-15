import { GetRandomIntegerStart } from "./get-random-integer-start";
import { GetRandomIntegerSuccess } from "./get-random-integer-success";
import { PopulateBoard } from "./populate-board";

export type Action =
  | GetRandomIntegerStart
  | GetRandomIntegerSuccess
  | PopulateBoard;

export * from './get-random-integer';
export * from './get-random-integer-start';
export * from './get-random-integer-success';
export * from './populate-board';
