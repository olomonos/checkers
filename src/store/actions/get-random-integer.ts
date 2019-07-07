import { AppThunk } from "../common";
import { getRandomIntegerStart } from "./get-random-integer-start";
import { getRandomIntegerSuccess } from "./get-random-integer-success";

export const getRandomInteger = (
  min: number,
  max: number
): AppThunk => async (
  dispatch,
  getState,
  api
) => {
  dispatch(getRandomIntegerStart());
  const num = await api.getRandomInt(min, max);
  dispatch(getRandomIntegerSuccess(num));
};
