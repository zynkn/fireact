import { createAction, handleActions } from 'redux-actions';
import produce from "immer"

export const GOOGLE_LOGIN = 'user/GOOGLE_LOGIN';
export const loginGoogle = createAction(GOOGLE_LOGIN);
const GOOGLE_LOGIN_SUCCESS = 'user/GOOGLE_LOGIN_SUCCESS';
export const loginGoogleSuccess = createAction(GOOGLE_LOGIN_SUCCESS);


export interface UserState {
  uid: string,
  isLogin: boolean,
  gender: string,
  weight: object,

}
const initialState: UserState = {
  uid: 'VcZblxmPQdhe23FjXjlmg7vm90K3',
  isLogin: true,
  gender: 'Male',
  weight: {},
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