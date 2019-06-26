import { all, takeLatest, put, call, select } from 'redux-saga/effects'
import {
  GOOGLE_LOGIN,
  loginGoogleSuccess,
  CHECK_ASYNC_TOKEN,
  CHECK_ASYNC_TOKEN_SUCCESS,
} from 'stores/modules/user';
import * as auth from 'api/Firebase/authentication';

import LocalForage from 'api/LocalForage';
import * as firestore from 'api/Firebase/firestore';


const USER_STATE = (state: any) => state.user
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

// function* checkAsyncToken() {
//   try {
//     console.log('checkAsyncToe')
//     const userState = yield select(USER_STATE);
//     const LOCAL_TOKEN = yield LocalForage.get('ASYNC_TOKEN');
//     console.log(LOCAL_TOKEN);
//     const SERVER_TOKEN = yield firestore.getAsyncToken({ uid: userState.uid });
//     console.log(LOCAL_TOKEN, SERVER_TOKEN);
//     if (LOCAL_TOKEN !== null && LOCAL_TOKEN === SERVER_TOKEN.ASYNC_TOKEN) {
//       console.log('싱크가 잘 맞는 중');
//     } else {

//       yield LocalForage.setAsyncToken(SERVER_TOKEN.ASYNC_TOKEN);
//       const data = yield firestore.getAllWorkout({ uid: userState.uid });
//       //console.log(data);
//       yield LocalForage.setAll(data);
//     }
//   } catch (e) { }
// }
// function* checkAsyncTokenSaga() {
//   yield takeLatest(CHECK_ASYNC_TOKEN, checkAsyncToken);
// }

export default function* userSaga() {
  yield all([
    loginGoogleSaga(),
    //checkAsyncTokenSaga(),
  ])
}