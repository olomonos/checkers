import { Checker, AppState } from "../common";

export type SetCheckerPosition = {
  type: 'SET_CHECKER_POSITION';
  payload: {
    checker: Checker,
    randomInteger: AppState['randomInteger'],
  }
};

export const setCheckerPosition = (
  checker: Checker,
  randomInteger: AppState['randomInteger']
): SetCheckerPosition => ({
  type: 'SET_CHECKER_POSITION',
  payload: {checker, randomInteger},
});
