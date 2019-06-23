import { all, takeLatest, put, call } from 'redux-saga/effects'
import {
  GOOGLE_LOGIN,
  loginGoogleSuccess
} from 'stores/modules/user';
import * as auth from 'api/Firebase/authentication';

function* loginGoogle({ payload }: any) {
  try {
    //const data = yield auth.signInGoogle();
    const data = yield call(auth.signInGoogle);
    //yield call(firestore.setWorkout, data.user.uid);
    console.log(data);
    yield put(loginGoogleSuccess({ uid: data.user.uid }));

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