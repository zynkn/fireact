import storage from 'lib/storage';
import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/workoutAPI';

const GET_ALL = 'workout/GET_ALL';
const SET = 'workout/SET';

export const getAll = createAction(GET_ALL, api.getAll);
export const set = createAction(SET);

const initialState = Map({
  data: [],
});

export default handleActions({
  ...pender({
    type: GET_ALL,
    onSuccess: (state, action) => {
      storage.set('workout', action.payload);
      return state.set('data', action.payload);
    }
  }),
  [SET]: (state, action) => {
    storage.add('workout', action.payload);
    return state;
  }
}, initialState);