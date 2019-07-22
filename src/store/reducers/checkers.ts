import { AppState, Checker } from "../common";
import { Action } from "../actions";

const NUM_ROWS = 8;
const NUM_COLS = 8;
const TOTAL_CHECKERS = NUM_ROWS + NUM_COLS;
const TOTAL_CELLS = NUM_ROWS * NUM_COLS;

const DEFAULT_STATE: AppState['checkers'] = (() => {
  const arr: Checker[] = [];
  for (let i = 0; i < TOTAL_CHECKERS; i++) {
    const item: Checker = {
      position: -1,
      type: i < TOTAL_CHECKERS / 2 ? 'Black' : 'White',
    };
    arr[i] = item;
  }
  return arr;
})();

export const checkers = (
  state: AppState['checkers'] = DEFAULT_STATE,
  action: Action
): AppState['checkers'] => {
  switch(action.type) {
    case 'POPULATE_BOARD': {
      return setInitialPositions(state);
    }
    default: 
      return state;
  }
};

const setInitialPositions = (checkers: AppState['checkers']) => {
  return checkers.map((checker, index) => {
    if (index < TOTAL_CHECKERS / 2) {
      return {
        ...checker,
        position: index,
      };
    } else {
      return {
        ...checker,
        position: TOTAL_CELLS - (2 * NUM_COLS - index),
      };
    }
  });
};
