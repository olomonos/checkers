import { GetRandomIntegerStart } from "./get-random-integer-start";
import { GetRandomIntegerSuccess } from "./get-random-integer-success";
import { PopulateBoard } from "./populate-board";
import { SwitchTurn } from "./switch-turn";
import { SetCheckerPosition } from "./set-checker-position";

export type Action =
  | GetRandomIntegerStart
  | GetRandomIntegerSuccess
  | PopulateBoard
  | SwitchTurn
  | SetCheckerPosition;

export * from './get-random-integer';
export * from './get-random-integer-start';
export * from './get-random-integer-success';
export * from './populate-board';
export * from './switch-turn';
export * from './set-checker-position';
export * from './move-checker';
