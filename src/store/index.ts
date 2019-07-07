import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { AppState } from "./common";
import { rootReducer } from "./reducers";
import { randomAPI, RandomIntegerAPI } from "../api";
import { Action } from "./actions";

const api = randomAPI();

const enhancers = applyMiddleware(
  thunk.withExtraArgument(api) as ThunkMiddleware<AppState, Action, RandomIntegerAPI>
);

export const store = createStore(
  rootReducer,
  enhancers
);

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
