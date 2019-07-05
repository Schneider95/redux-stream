import { SIGN_IN, SIGN_OUT } from './types';

export const signInAction = userId => ({
  payload: userId,
  type: SIGN_IN,
});
export const signOutAction = () => ({
  type: SIGN_OUT,
});
