import { combineReducers } from "redux";

import { field } from "./field";
import { randomInteger } from "./random-integer";
import { checkers } from "./checkers";
import { AppState } from "../common";

export const rootReducer = combineReducers<AppState>({
  randomInteger,
  field,
  checkers,
});
