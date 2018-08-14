import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GOOGLE_LOGIN = 'login/GOOGLE_LOGIN';
const GOOGLE_LOGOUT = 'login/GOOGLE_LOGOUT';

// action creators
export const googleLogin = createAction(GOOGLE_LOGIN, api.googleLogin);
export const googleLogout = createAction(GOOGLE_LOGOUT, api.googleLogout);

//initial state
const initialState = Map({
  isLogin: false,
  user: null,
});

// reducer
export default handleActions({

  ...pender({
    type: GOOGLE_LOGOUT,
    onSuccess: (state, action) => {
      console.log('logout');
      console.log(action);
      return state.set('isLogin', false);
    }
  }),
  ...pender({
    type: GOOGLE_LOGIN,
    onSuccess: (state, action) => {
      console.log('ggg')
      console.log(action.payload);
      return state.set('isLogin', true)
    }
  })
}, initialState);