import { createAction, handleActions } from 'redux-actions';
import moment from 'moment';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types

const GET_RECORD = 'record/GET_RECORD';
const ADD_RECORD = 'record/ADD_RECORD';
const NEW_RECORD = 'record/NEW_RECORD';
const LOADING = 'record/LOADING';


// action creators
export const getRecord = createAction(GET_RECORD, api.getRecord);
export const addRecord = createAction(ADD_RECORD, api.addRecord);
export const newRecord = createAction(NEW_RECORD, api.newRecord);
export const loading = createAction(LOADING);

//initial state
const initialState = Map({
  data: null,
  selectedDate: moment().format('YYYYMMDD'),
  isLoading: true,
});

// reducer
export default handleActions({
  [LOADING]: (state, action) => {
    return state.set('isLoading', true);
  },
  ...pender({
    type: NEW_RECORD,
    onSuccess: (state, action) => {
      console.log('NEW_RECORD');
      return state
    },
    onError: (state, action) => {
      console.log(action);
      console.log('error');
    }
  }),
  ...pender({
    type: GET_RECORD,
    onSuccess: (state, action) => {
      console.log('GET_RECORD');
      return state.set('data', action.payload.data)
        .set('selectedDate', action.payload.date)
        .set('isLoading', false)

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
      return state
    },
    onError: (state, action) => {
      console.log('error', action);
    }
  })
}, initialState);