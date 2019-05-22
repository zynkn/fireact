import { all, takeLatest, put, call, select } from 'redux-saga/effects'

import {
  SELECTED_DATE_UPDATE,
  updateSelectedDateSuccess,
  updateSelectedDateFailure
} from 'stores/modules/workout';

import {
  DATA_UPDATE,
  updateDataSuccess
} from 'stores/modules/workout';

import LocalForage from 'api/LocalForage';

export const getWorkout = (state: any) => state.workout


function* updateSelectedDate({ payload }: any) {
  try {

    const data = yield LocalForage.get(payload.format('YYYY-MM-DD')).then(res => (res || { data: null }))
    yield put(updateSelectedDateSuccess({ date: payload, data: data.data }))
  } catch (e) {
    //yield put(updateSelectedDate(e));
  }
}
export function* updateSelectedDateSaga() {
  yield takeLatest(SELECTED_DATE_UPDATE, updateSelectedDate);
}

function* updateData({ payload }: any) {
  try {
    let state = yield select(getWorkout);
    console.log(payload.isNew);
    if (payload.isNew) {
      yield LocalForage.set(
        state.selectedDate.format('YYYY-MM-DD'),
        { date: state.selectedDate.format('YYYY-MM-DD'), data: state.data.concat(payload) }
      )
      yield put(updateDataSuccess(payload));
    } else {
      console.log(state.data);
      console.log(payload.detail);
      let temp = state.data;
      temp[0].detail = temp[0].detail.concat(payload.detail);
      console.log(temp);
      yield LocalForage.set(
        state.selectedDate.format('YYYY-MM-DD'),
        {
          date: state.selectedDate.format('YYYY-MM-DD'), data: temp
        }
      )
      yield put(updateDataSuccess({ ...payload, detail: temp[0].detail }));
    }


  } catch (e) {

  }
}
export function* updateDataSaga() {
  yield takeLatest(DATA_UPDATE, updateData);
}

export default function* workoutSaga() {
  yield all([
    updateSelectedDateSaga(),
    updateDataSaga(),
  ])
}