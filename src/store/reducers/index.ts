import { combineReducers } from "redux";

import { field } from "./field";
import { randomInteger } from "./random-integer";
import { AppState } from "../common";

export const rootReducer = combineReducers<AppState>({
  field,
  randomInteger
});
