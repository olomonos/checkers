import { AppState, Checker } from "../common";
import { Action } from "../actions";

const NUM_ROWS = 8;
const NUM_COLS = 8;
const TOTAL = NUM_ROWS * NUM_COLS;

const DEFAULT_STATE: AppState['field'] = (() => {
  const arr: Checker[] = [];
  for (let i = 0; i < TOTAL; i++) {
    arr[i] = 'Empty'
  }
  return arr;
})();

export const field = (
  state: AppState['field'] = DEFAULT_STATE,
  action: Action
): AppState['field'] => {
  switch(action.type) {
    case 'POPULATE_BOARD': {
      return state.map((checker, index) => {
        if (index < NUM_ROWS) {
          return 'Black';
        }
        if (index > TOTAL - NUM_ROWS - 1) {
          return 'White';
        }
        return 'Empty';
      });
    }
    default: 
      return state;
  }
};
