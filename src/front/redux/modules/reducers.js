// @flow

// #region imports
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import fakeModuleWithFetch from './fakeModuleWithFetch';
import userAuth from './userAuth';
import catalog from './catalog';
// #endregion

export const reducers = {
  catalog,
  fakeModuleWithFetch,
  userAuth,
};

export default combineReducers({
  ...reducers,
  routing: routerReducer,
});
