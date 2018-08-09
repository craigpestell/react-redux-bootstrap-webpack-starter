/* @flow */

import axios from 'axios';

import type { Dispatch, GetState, ThunkAction, ReduxState } from '../types';

const API_URL =
  'http://localhost:3300/api/catalog?clientid=5a699f8c7107831a97566d4f';

// Export this for unit testing more easily
/* istanbul ignore next */
export const fetchCatalog = (URL: string = API_URL): ThunkAction => async (
  dispatch: Dispatch,
) => {
  dispatch({ type: 'CATALOG_REQUESTING' });

  try {
    const { data } = await axios.get(URL);

    /* istanbul ignore next */
    dispatch({ type: 'CATALOG_SUCCESS', data });
  } catch (err) {
    /* istanbul ignore next */
    dispatch({ type: 'CATALOG_FAILURE', err: err.message });
  }
};

/* istanbul ignore next */
const shouldFetchCatalog = (state: ReduxState): boolean => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  // if (__DEV__) {
  //  return true;
  // }

  // Fetching data once in production
  if (state.catalog.readyStatus === 'CATALOG_SUCCESS') {
    return false;
  }

  return true;
};

/* istanbul ignore next */
export const fetchCatalogIfNeeded = (): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
) => {
  /* istanbul ignore next */
  if (shouldFetchCatalog(getState())) {
    /* istanbul ignore next */
    return dispatch(fetchCatalog());
  }

  /* istanbul ignore next */
  return null;
};
