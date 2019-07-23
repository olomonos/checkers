import { AppState } from "../common";
import { Action } from "../actions";

const DEFAULT_STATE: AppState['turn'] = 'White';

export const turn = (
  state: AppState['turn'] = DEFAULT_STATE,
  action: Action
): AppState['turn'] => {
  switch (action.type) {
    case 'SWITCH_TURN': {
      return state === 'White' ? 'Black' : 'White';
    }
    default:
      return state;
  }
};
