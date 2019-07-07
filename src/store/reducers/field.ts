import { AppState, Checker } from "../common";

const DEFAULT_STATE: AppState['field'] = (() => {
  const arr: Checker[] = [];
  for (let i = 0; i < 64; i++) {
    arr[i] = 'Empty'
  }
  return arr;
})();

export const field = (state = DEFAULT_STATE) => state;
