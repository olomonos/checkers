import { AppState, Checker } from "../common";

const NUM_ROWS = 8;
const NUM_COLS = 8;
const TOTAL_CELLS = NUM_ROWS * NUM_COLS;

// const DEFAULT_STATE: AppState['field'] = (() => {
//   const arr: Checker[] = [];
//   for (let i = 0; i < TOTAL_CELLS; i++) {
//     arr[i] = 'Empty'
//   }
//   return arr;
// })();

const DEFAULT_STATE: AppState['field'] = (() => {
  const arr: number[] = [];
  for (let i = 0; i < TOTAL_CELLS; i++) {
    arr[i] = i;
  }
  return arr;
})();

export const field = (state: AppState['field'] = DEFAULT_STATE) => state;
