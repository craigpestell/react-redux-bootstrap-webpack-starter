// @flow

// #region imports
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fakeModuleWithFetch from './fakeModuleWithFetch';
import userAuth from './userAuth';
import catalog from './catalog';
import wo from './wo';
import widgets from './widgets';
// #endregion

export const reducers = {
  widgets,
  wo,
  catalog,
  fakeModuleWithFetch,
  userAuth,
  form: formReducer,
};

export default combineReducers({
  ...reducers,
  routing: routerReducer,
});
