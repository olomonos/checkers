import { GetRandomIntegerStart } from "./get-random-integer-start";
import { GetRandomIntegerSuccess } from "./get-random-integer-success";

export type Action =
  | GetRandomIntegerStart
  | GetRandomIntegerSuccess;

export * from './get-random-integer';
export * from './get-random-integer-start';
export * from './get-random-integer-success';
