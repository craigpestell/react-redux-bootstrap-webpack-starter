/* @flow */

import _ from 'lodash';

import type { Catalog, Action } from '../types';

type State = Catalog;

const initialState = {
  readyStatus: 'CATALOG_INVALID',
  err: null,
  list: [],
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'CATALOG_REQUESTING':
      return _.assign({}, state, {
        readyStatus: 'CATALOG_REQUESTING',
      });
    case 'CATALOG_FAILURE':
      return _.assign({}, state, {
        readyStatus: 'CATALOG_FAILURE',
        err: action.err,
      });
    case 'CATALOG_SUCCESS':
      return _.assign({}, state, {
        readyStatus: 'CATALOG_SUCCESS',
        list: action.data,
      });
    default:
      return state;
  }
};
