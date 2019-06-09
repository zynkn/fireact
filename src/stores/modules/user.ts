import { createAction, handleActions } from 'redux-actions';
import moment, { Moment as MomentTypes } from 'moment';
import produce from "immer"

export const GOOGLE_LOGIN = 'user/GOOGLE_LOGIN';
export const loginGoogle = createAction(GOOGLE_LOGIN);
const GOOGLE_LOGIN_SUCCESS = 'user/GOOGLE_LOGIN_SUCCESS';
export const loginGoogleSuccess = createAction(GOOGLE_LOGIN_SUCCESS);


export interface UserState {
  uid: string,

  isLogin: boolean
}
const initialState: UserState = {
  uid: '',
  isLogin: false,
}


export default handleActions({
  [GOOGLE_LOGIN_SUCCESS]: (state, action: any) => {
    console.log(action);
    return produce(state, draft => {
      draft.uid = action.payload.uid;
      draft.isLogin = true;
    })
  }
}, initialState)