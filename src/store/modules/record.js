import { createAction, handleActions } from 'redux-actions';
import moment from 'moment';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types

const GET_RECORD = 'record/GET_RECORD';

// action creators
export const getRecord = createAction(GET_RECORD, api.getRecord);


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
      return state.set('data', action.payload);

    },
    onError: (state, action) => {
      console.log(action);
      console.log('error');
    }
  })
}, initialState);