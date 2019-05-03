import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/mypageAPI';


const SET_USER_INFO = 'mypage/SET_USER_INFO';
const GET_USER_INFO = 'mypage/GET_USER_INFO';
const LOADING = 'mypage/LOADING';

export const getUserInfo = createAction(GET_USER_INFO, api.getUserInfo);
export const setUserInfo = createAction(SET_USER_INFO, api.setUserInfo);
export const loading = createAction(LOADING);

const initialState = Map({
  DOB: '',
  gender: '',
  weight: '',
  isLoading: false,
});

export default handleActions({
  [LOADING]: (state, action) => {
    return state.set('isLoading', true)
  },
  ...pender({
    type: GET_USER_INFO,
    onSuccess: (state, action) => {
      return state.set('DOB', action.payload.DOB || '')
        .set('gender', action.payload.sex || '')
        .set('weight', action.payload.weight[action.payload.weight.length - 1].data || '')
        .set('isLoading', false);

    }
  }),
  ...pender({
    type: SET_USER_INFO,
    onSuccess: (state, action) => {
      return state;
    }
  })
}, initialState)