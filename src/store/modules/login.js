
import storage from 'lib/storage';
import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/loginAPI';

// action types
const GOOGLE_LOGIN = 'login/GOOGLE_LOGIN';
const FACEBOOK_LOGIN = 'login/FACEBOOK_LOGIN';
const GOOGLE_LOGOUT = 'login/GOOGLE_LOGOUT';
const SET_LOGGED_INFO = 'login/SET_LOGGED_INFO';
const SET_ISLOGIN = 'login/SET_ISLOGIN';

// action creators
export const googleLogin = createAction(GOOGLE_LOGIN, api.googleLogin);
export const facebookLogin = createAction(FACEBOOK_LOGIN, api.facebookLogin);
export const googleLogout = createAction(GOOGLE_LOGOUT, api.googleLogout);
export const setLoggedInfo = createAction(SET_LOGGED_INFO);
export const setIslogin = createAction(SET_ISLOGIN);

//initial state
const initialState = Map({
  isLogin: false,
  isLoading: true,
  user: null,
  //userUID: 'VcZblxmPQdhe23FjXjlmg7vm90K3',
  userUID: null,
});

// reducer
export default handleActions({
  [SET_ISLOGIN]: (state, action) => state.set('isLogin', true),
  [SET_LOGGED_INFO]: (state, action) => state.set('user', action.payload).set('isLogin', true).set('isLoading', false),
  ...pender({
    type: GOOGLE_LOGOUT,
    onSuccess: (state, action) => {
      storage.remove('user');
      return state.set('isLogin', false)
        .set('user', null);
    }
  }),
  ...pender({
    type: GOOGLE_LOGIN,
    onSuccess: (state, action) => {
      storage.set('user', action.payload.user);
      return state.set('isLogin', true)
        .set('user', action.payload.user)
        .set('userUID', action.payload.user.uid)
    }
  }),
  ...pender({
    type: FACEBOOK_LOGIN,
    onSuccess: (state, action) => {
      storage.set('user', action.payload.user);
      return state.set('isLogin', true)
        .set('user', action.payload.user)
        .set('userUID', action.payload.user.uid)
    }
  })
}, initialState);