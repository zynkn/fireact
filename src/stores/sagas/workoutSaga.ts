import { all, takeLatest, put, call, select } from 'redux-saga/effects'

import {
  SELECTED_DATE_UPDATE,
  updateSelectedDateSuccess,
  updateSelectedDateFailure,
  addLabel
} from 'stores/modules/workout';

import {
  DATA_UPDATE,
  updateDataSuccess
} from 'stores/modules/workout';

import LocalForage from 'api/LocalForage';
import utils from 'utils';
import { LABELS } from 'CONSTANTS';

const getWorkout = (state: any) => state.workout
const getModal = (state: any) => state.modal

function* updateSelectedDate({ payload }: any) {
  try {
    const data = yield LocalForage.get(payload.format('YYYY-MM-DD')).then(res => (res || {}));
    let startWeek = payload.clone().startOf('month').week();
    let endWeek = payload.clone().endOf('month').week() === 1 ? 53 : payload.clone().endOf('month').week();
    let dates = utils.getCalendarDates(startWeek, endWeek);
    const labels = yield LocalForage.getSome(dates).then(res => {
      return utils.getUniqueItem(res);
    })
    yield put(updateSelectedDateSuccess({ date: payload, data: data, labels: labels }))
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
    let tmp: any = (Object.values(payload)[0]);
    console.log(tmp);
    yield put(addLabel(LABELS[tmp.type]));
    const data = yield LocalForage.set(
      state.selectedDate.format('YYYY-MM-DD'),
      payload
    ).then(() => {
      return LocalForage.get(state.selectedDate.format('YYYY-MM-DD')).then((res) => {
        return res;
      });
    })
    yield put(updateDataSuccess(data));

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