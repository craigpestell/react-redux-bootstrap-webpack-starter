/* @flow */

import _ from 'lodash';

import type { Wo, Action } from '../types';

type State = Wo;

const initialState = {
  readyStatus: 'WO_INVALID',
  err: null,
  wo: { name: 'empty' },
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'WO_REQUESTING':
      return _.assign({}, state, {
        readyStatus: 'WO_REQUESTING',
      });
    case 'WO_FAILURE':
      return _.assign({}, state, {
        readyStatus: 'WO_FAILURE',
        err: action.err,
      });
    case 'WO_SUCCESS':
      return _.assign({}, state, {
        readyStatus: 'WO_SUCCESS',
        wo: action.data,
      });
    default:
      return state;
  }
};
