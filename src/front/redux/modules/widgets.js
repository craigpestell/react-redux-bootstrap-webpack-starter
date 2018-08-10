// @flow
import type { Dispatch, GetState, ThunkAction, ReduxState } from './types';
import axios from 'axios';

const LOAD = 'redux-example/widgets/LOAD';

const LOAD_FAIL = 'redux-example/widgets/LOAD_FAIL';
const EDIT_START = 'redux-example/widgets/EDIT_START';
const EDIT_STOP = 'redux-example/widgets/EDIT_STOP';
const SAVE = 'redux-example/widgets/SAVE';
const SAVE_SUCCESS = 'redux-example/widgets/SAVE_SUCCESS';
const SAVE_FAIL = 'redux-example/widgets/SAVE_FAIL';

const initialState = {
  readyStatus: 'WIDGETS_INVALID',
  loaded: false,
  editing: {},
  saveError: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case 'WIDGETS_SUCCESS':
      return {
        ...state,
        readyStatus: 'WIDGETS_SUCCESS',
        data: action.data,
        /* OLD */
        loading: false,
        loaded: true,
        error: null,
      };
    /* return {
        ...state,
        loading: false,
        loaded: true,
        data: action.data,
        error: null,
      };*/
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error,
      };
    case EDIT_START:
      return {
        ...state,
        editing: {
          ...state.editing,
          [action.id]: true,
        },
      };
    case EDIT_STOP:
      return {
        ...state,
        editing: {
          ...state.editing,
          [action.id]: false,
        },
      };
    case SAVE:
      return state; // 'saving' flag handled by redux-form
    case SAVE_SUCCESS:
      const data = [...state.data];
      data[action.result.id - 1] = action.result;
      return {
        ...state,
        data: data,
        editing: {
          ...state.editing,
          [action.id]: false,
        },
        saveError: {
          ...state.saveError,
          [action.id]: null,
        },
      };
    case SAVE_FAIL:
      return typeof action.error === 'string'
        ? {
            ...state,
            saveError: {
              ...state.saveError,
              [action.id]: action.error,
            },
          }
        : state;
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.widgets && globalState.widgets.loaded;
}

export function load() {
  return {
    types: [LOAD, 'WIDGETS_SUCCESS', LOAD_FAIL],
    promise: client => client.get('/widget/load/param1/param2'), // params not used, just shown as demonstration
  };
}

export const fetchWidgets = (
  URL: string = 'http://localhost:3300/api/catalog?clientid=5a699f8c7107831a97566d4f',
): ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'WIDGETS_REQUESTING' });

  try {
    // const { data } = await axios.get(URL);
    const initialWidgets = [
      { id: 1, color: 'Red', sprocketCount: 7, owner: 'John' },
      { id: 2, color: 'Taupe', sprocketCount: 1, owner: 'George' },
      { id: 3, color: 'Green', sprocketCount: 8, owner: 'Ringo' },
      { id: 4, color: 'Blue', sprocketCount: 2, owner: 'Paul' },
    ];

    function getWidgets() {
      let widgets; // req.session.widgets;
      if (!widgets) {
        widgets = initialWidgets;
        // req.session.widgets = widgets;
      }
      return widgets;
    }

    /* istanbul ignore next */
    dispatch({ type: 'WIDGETS_SUCCESS', data: { widgets: getWidgets() } });
  } catch (err) {
    /* istanbul ignore next */
    dispatch({ type: 'WIDGETS_FAILURE', err: err.message });
  }
};

/* istanbul ignore next */
export const fetchWidgetsIfNeeded = (): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState,
) => {
  console.log('Widgets getState inside fetchWidgetsIfNeeded...:', getState());
  /* istanbul ignore next */
  if (!isLoaded(getState())) {
    /* istanbul ignore next */
    return dispatch(fetchWidgets());
  }

  /* istanbul ignore next */
  return null;
};

export function save(widget) {
  return {
    types: [SAVE, SAVE_SUCCESS, SAVE_FAIL],
    id: widget.id,
    promise: client =>
      client.post('/widget/update', {
        data: widget,
      }),
  };
}

export function editStart(id) {
  return { type: EDIT_START, id };
}

export function editStop(id) {
  return { type: EDIT_STOP, id };
}
