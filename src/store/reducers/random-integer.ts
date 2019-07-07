import { AppState } from "../common";
import { Action } from "../actions";

const DEFAULT_STATE: AppState['randomInteger'] = null;

export const randomInteger = (
  state: AppState['randomInteger'] = DEFAULT_STATE,
  action: Action
): AppState['randomInteger'] => {
  switch (action.type) {
    case 'GET_RANDOM_INTEGER_SUCCESS': {
      return action.payload;
    }
    case 'GET_RANDOM_INTEGER_START': {
      return null;
    }
    default:
      return state;
  }
};
