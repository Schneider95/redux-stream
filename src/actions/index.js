import streams from '../apis/streams';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from './types';

/**
 * Sign in and out action.
 */
export const signInAction = userId => ({
  payload: userId,
  type: SIGN_IN,
});

export const signOutAction = () => ({
  type: SIGN_OUT,
});

/**
 * Create stream action.
 */
export const createStreamAction = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
};

/**
 * Delete stream action.
 */
export const deleteStreamAction = id => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};

/**
 * Edit stream action.
 */
export const editStreamAction = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
};

/**
 * Fetch stream action.
 */
export const fetchStreamAction = id => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

/**
 * Fetch multiple streams action.
 */
export const fetchStreamsAction = formValues => async (dispatch) => {
  const response = await streams.get('/streams', formValues);

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};
