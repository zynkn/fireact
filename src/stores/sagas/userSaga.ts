import { all, takeLatest, put, select } from 'redux-saga/effects'
import {
  GOOGLE_LOGIN,
  loginGoogleSuccess
} from 'stores/modules/user';
import * as auth from 'api/Firebase/authentication';


function* loginGoogle({ payload }: any) {
  try {
    const data = yield auth.signInGoogle();
    console.log(data);
    yield put(loginGoogleSuccess(data));

  } catch (e) {

  }
}
function* loginGoogleSaga() {
  yield takeLatest(GOOGLE_LOGIN, loginGoogle);
}

export default function* userSaga() {
  yield all([
    loginGoogleSaga()
  ])
}