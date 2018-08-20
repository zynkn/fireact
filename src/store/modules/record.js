import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types

const GET_RECORD = 'record/GET_RECORD';
const GET_TEST = ' record/GET_TEST';

// action creators
export const getRecord = createAction(GET_RECORD, api.getRecord);
export const getTest = createAction(GET_TEST);

//initial state
const initialState = Map({
  data: null,
});

// reducer
export default handleActions({
  [GET_TEST]: (state, action) => {
    console.log('GET_TEST');
    console.log(action);
    return state.set('data', 'true');
  },
  ...pender({
    type: GET_RECORD,
    onSuccess: (state, action) => {
      console.log('GET_RECORD');
      console.log(action);
      return state.set('data', 'data');
    },
    onError: (state, action) => {
      console.log(action);
      console.log('error');
    }
  })
}, initialState);