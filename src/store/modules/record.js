import { createAction, handleActions } from 'redux-actions';
import moment from 'moment';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types

const GET_RECORD = 'record/GET_RECORD';
const ADD_RECORD = 'record/ADD_RECORD';

// action creators
export const getRecord = createAction(GET_RECORD, api.getRecord);
export const addRecord = createAction(ADD_RECORD, api.addRecord);

//initial state
const initialState = Map({
  data: [],
  selectedDate: moment().format('YYYYMMDD'),
});

// reducer
export default handleActions({
  ...pender({
    type: GET_RECORD,
    onSuccess: (state, action) => {
      console.log('GET_RECORD');
      console.log(state);
      console.log(action);
      console.log(action.payload);
      return state.set('data', action.payload.data)
        .set('selectedDate', action.payload.date)

    },
    onError: (state, action) => {
      console.log(action);
      console.log('error');
    }
  }),
  ...pender({
    type: ADD_RECORD,
    onSuccess: (state, action) => {
      console.log(action.payload);
      // return true;
    },
    onError: (state, action) => {
      console.log('error', action);
    }
  })
}, initialState);