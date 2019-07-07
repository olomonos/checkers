import { ThunkAction } from "redux-thunk";

import { RandomIntegerAPI } from "../api";
import { Action } from "./actions";

export type AppState = {
  field: Checker[];
  randomInteger: number | null;
}

export type Checker = 'White' | 'Black' | 'Empty';

export type AppThunk = ThunkAction<void, AppState, RandomIntegerAPI, Action>;
