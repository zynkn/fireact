import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

// Action Types
const LOGIN_CHECK = 'login/LOGIN_CHECK';

// Action Creators
export const loginCheck = createAction(LOGIN_CHECK);

// Initial State
const initialState = Map({
  isLogin: false,
  platform: null,
});

// reducer
export default handleActions({
  [LOGIN_CHECK]: (state, action) => {
    const { payload } = action;
    console.log(action);
    return state.set('isLogin', true)
                .set('platform', 'facebook')
  }
}, initialState);

