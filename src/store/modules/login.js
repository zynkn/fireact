import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GOOGLE_LOGIN = 'login/GOOGLE_LOGIN';

// action creators
export const googleLogin = createAction(GOOGLE_LOGIN, api.googleLogin);

//initial state
const initialState = Map({
  isLogin: true,
  user: null,
});

// reducer
export default handleActions({
  ...pender({
    type: GOOGLE_LOGIN,
    onSuccess: (state, action) => {
      console.log('ggg')
      console.log(action.payload);
      return state.set('isLogin', true)
    }
  })
}, initialState);