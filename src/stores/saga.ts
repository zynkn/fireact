import { all, takeLatest, put, call } from 'redux-saga/effects'
import { CHANGE_MONTH, changeMonthAsync, SELECT_DATE, selectDateAsync } from 'stores/modules/workout';

function* changeMonth({ payload }: any) {
  try {
    yield put(changeMonthAsync(payload))
  } catch (e) {
    // yield put({ type: FAILED_GET_USER_INFO, e })
  }
}
function* selectDate({ payload }: any) {
  try {
    yield put(selectDateAsync(payload))
  } catch (e) {

  }
}

export function* changeMonthSaga() {
  yield takeLatest(CHANGE_MONTH, changeMonth);
}

export function* selectDateSaga() {
  yield takeLatest(SELECT_DATE, selectDate);
}

export default function* rootSaga() {
  yield all([
    changeMonthSaga(),
    selectDateSaga()
  ])
}