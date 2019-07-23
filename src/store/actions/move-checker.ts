import { AppThunk, Checker } from "../common";
import { getRandomInteger } from "./get-random-integer";
import { setCheckerPosition } from "./set-checker-position";

export const moveChecker = (checker: Checker): AppThunk => async(
  dispatch,
  getState
) => {
  try {
    await dispatch(getRandomInteger(-1, 8));
    const randomInteger = getState().randomInteger;
    if (randomInteger) {
      dispatch(setCheckerPosition(checker, randomInteger));
    }  
  } catch (e) {
    console.log(e);
  }
};
