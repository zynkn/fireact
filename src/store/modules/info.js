import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_USER_INFO = 'info/GET_USER_INFO';
const SET_USER_INFO = 'info/SET_USER_INFO';

// action creators
export const getUserInfo = createAction(GET_USER_INFO, api.getUserInfo);
export const setUserInfo = createAction(SET_USER_INFO, api.setUserInfo);

//initial state
const initialState = Map({
  height: null,
  DOB: '1992Nov',
  sex: null,
  userUID: 'VcZblxmPQdhe23FjXjlmg7vm90K3',
});

// reducer
export default handleActions({

  ...pender({
    type: GET_USER_INFO,
    onSuccess: (state, action) => {
      console.log('GETUSERINFO')
      console.log(action.payload);
      return state.set('height', action.payload.height[action.payload.height.length - 1].data)
        .set('DOB', action.payload.DOB)
        .set('sex', action.payload.sex)
    }
  }),
  ...pender({
    type: SET_USER_INFO,
    onSuccess: (state, action) => {
      console.log('SETUSERINFO');
      console.log(action.payload);
      return state;
    }
  })
}, initialState);