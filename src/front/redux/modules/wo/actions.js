/* @flow */

import axios from 'axios';

import type { Dispatch, GetState, ThunkAction, ReduxState } from '../types';

const API_URL = 'http://localhost:3300/api/catalog/';

// Export this for unit testing more easily
/* istanbul ignore next */
export const fetchWo = (
  catalogId,
  URL: string = API_URL,
): ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'WO_REQUESTING' });
  if (catalogId) {
    URL = `http://localhost:3300/api/catalog/${catalogId}/?clientid=5a699f8c7107831a97566d4f`;
  }
  try {
    const { data } = await axios.get(URL);

    /* istanbul ignore next */
    dispatch({ type: 'WO_SUCCESS', data });
  } catch (err) {
    /* istanbul ignore next */
    dispatch({ type: 'WO_FAILURE', err: err.message });
  }
};

/* istanbul ignore next */
const shouldFetchWo = (state: ReduxState): boolean => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  // if (__DEV__) {

  return true;
  // }

  // Fetching data once in production
  if (state.wo.readyStatus === 'WO_SUCCESS') {
    return false;
  }

  return true;
};

/* istanbul ignore next */
export const fetchWoIfNeeded = (catalogId): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
) => {
  /* istanbul ignore next */
  if (shouldFetchWo(getState())) {
    /* istanbul ignore next */
    return dispatch(fetchWo(catalogId));
  }

  /* istanbul ignore next */
  return null;
};
