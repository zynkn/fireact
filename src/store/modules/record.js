import { createAction, handleActions } from 'redux-actions';
import moment from 'moment';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types

const GET_RECORD = 'record/GET_RECORD';
const SET_RECORD = 'record/SET_RECORD';
const DEL_RECORD = 'record/DEL_RECORD';
const CHANGE_NAME = 'record/CHANGE_NAME';
const LOADING = 'record/LOADING';


// action creators
export const getRecord = createAction(GET_RECORD, api.getRecord);
export const setRecord = createAction(SET_RECORD, api.setRecord);
export const delRecord = createAction(DEL_RECORD, api.delRecord);
export const changeName = createAction(CHANGE_NAME, api.changeName);
export const loading = createAction(LOADING);




//initial state
const initialState = Map({
  data: [],
  selectedDate: moment().format('YYYYMMDD'),
  isLoading: true,
});

// reducer
export default handleActions({
  ...pender({
    type: SET_RECORD,
    onSuccess: (state, action) => {
      return state
    }
  }),
  [LOADING]: (state, action) => {
    return state.set('isLoading', true)
      .set('selectedDate', action.payload)
  },
  ...pender({
    type: CHANGE_NAME,
    onSuccess: (state, action) => {
      return state
    }
  }),
  ...pender({
    type: GET_RECORD,
    onSuccess: (state, action) => {
      return state.set('data', action.payload.data)
        .set('isLoading', false)
    }
  }),
  ...pender({
    type: DEL_RECORD,
    onSuccess: (state, action) => {
      return state
    }
  }),
}, initialState);