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
  isLogin: true,
  user: null,
  userUID: 'VcZblxmPQdhe23FjXjlmg7vm90K3',
  //userUID: null,
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
      console.log('login')
      console.log(action.payload.user.uid);
      return state.set('isLogin', true)
        .set('userUID', action.payload.user.uid)
    }
  })
}, initialState);