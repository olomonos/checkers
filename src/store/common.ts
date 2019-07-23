import { ThunkAction } from "redux-thunk";

import { RandomIntegerAPI } from "../api";
import { Action } from "./actions";

export type AppState = {
  randomInteger: number | null;
  field: number[];
  checkers: Checker[];
  turn: 'White' | 'Black';
}

export type Checker = {
  position: number;
  type: 'White' | 'Black';
}

export type AppThunk = ThunkAction<void, AppState, RandomIntegerAPI, Action>;
