// @flow

// #region imports
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import fakeModuleWithFetch from './fakeModuleWithFetch';
import userAuth from './userAuth';
import catalog from './catalog';
import wo from './wo';
// #endregion

export const reducers = {
  wo,
  catalog,
  fakeModuleWithFetch,
  userAuth,
};

export default combineReducers({
  ...reducers,
  routing: routerReducer,
});
