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
  id: number;
  type: 'White' | 'Black';
  position: number;
}

export type AppThunk = ThunkAction<void, AppState, RandomIntegerAPI, Action>;
