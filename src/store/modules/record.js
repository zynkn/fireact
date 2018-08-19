import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types

const GET_RECORD = 'record/GET_RECORD';


// action creators
export const getRecord = createAction(GET_RECORD, api.getRecord);


//initial state
const initialState = Map({
  data: null,
});

// reducer
export default handleActions({
  [GET_RECORD]: (state, action) => {
    console.log('GET_RECORD');
      console.log(action);
    return state.set('logged', true);
  },
  // ...pender({
  //   type: GET_RECORD,
  //   onSuccess: (state, action) => {
  //     console.log('GET_RECORD');
  //     console.log(action);
  //     return state.set('data', 'data');
  //   }
  // })
}, initialState);