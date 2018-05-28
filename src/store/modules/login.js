import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

// Action Types
const LOGIN_CHECK = 'login/LOGIN_CHECK';
const MODAL_TOGGLE = 'login/MODAL_TOGGLE';

// Action Creators
export const loginCheck = createAction(LOGIN_CHECK);
export const modalToggle = createAction(MODAL_TOGGLE);

// Initial State
const initialState = Map({
  isLogin: false,
  platform: null,
  user: null,
  isOpen: false,
});

// reducer
export default handleActions({
  [LOGIN_CHECK]: (state, action) => {
    const { payload } = action;
    return state.set('isLogin', payload.isLogin)
      .set('platform', payload.platform)
      .set('user', payload.user)
      .set('isOpen', payload.isOpen)
  },
  [MODAL_TOGGLE]: (state, action) => {
    const { payload } = action;
    return state.set('isOpen', payload.isOpen)
  }
}, initialState);

