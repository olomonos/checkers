export type GetRandomIntegerSuccess = {
  type: 'GET_RANDOM_INTEGER_SUCCESS',
  payload: number
};

export const getRandomIntegerSuccess = (num: number): GetRandomIntegerSuccess => ({
  type: 'GET_RANDOM_INTEGER_SUCCESS',
  payload: num
});
