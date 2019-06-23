import { all, takeLatest, put, select, call } from 'redux-saga/effects'

import {
  SELECTED_DATE_UPDATE,
  updateSelectedDateSuccess,
  addLabel,
  updateLabel,
} from 'stores/modules/workout';
import { DATA_ADD, addDataSuccess } from 'stores/modules/workout';
import { DATA_UPDATE, updateDataSuccess } from 'stores/modules/workout';
import { DATA_REMOVE, removeDataSuccess } from 'stores/modules/workout';
import { INIT_DATA, initDataSuccess } from 'stores/modules/workout';

import LocalForage from 'api/LocalForage';
import utils from 'utils';
import { LABELS } from 'CONSTANTS';
import moment from 'moment';
import * as firestore from 'api/Firebase/firestore';

const WORKOUT_STATE = (state: any) => state.workout
const USER_STATE = (state: any) => state.user

function* updateSelectedDate({ payload }: any) {
  try {
    const userState = yield select(USER_STATE);
    const data = yield firestore.getWorkout({
      uid: userState.uid,
      date: payload.format('YYYY-MM-DD')
    });
    let startWeek = payload.clone().startOf('month').week();
    let endWeek = payload.clone().endOf('month').week() === 1 ? 53 : payload.clone().endOf('month').week();
    let dates = utils.getCalendarDates(startWeek, endWeek);

    const datas = yield call(firestore.getWorkouts,
      { uid: userState.uid, start: dates[0], end: dates[dates.length - 1] });
    const labels = utils.getUniqueItem(datas);
    yield put(updateSelectedDateSuccess({ date: payload, data: data, labels: labels }))
  } catch (e) {
    //yield put(updateSelectedDate(e));
  }
}

export function* updateSelectedDateSaga() {
  yield takeLatest(SELECTED_DATE_UPDATE, updateSelectedDate);
}

function* addData({ payload }: any) {
  try {
    const workoutState = yield select(WORKOUT_STATE);
    const userState = yield select(USER_STATE);
    const workoutId = payload.workoutId;
    const data = yield LocalForage.set(
      workoutState.selectedDate.format('YYYY-MM-DD'),
      {
        [workoutId]: {
          type: LABELS[payload.label].type,
          name: payload.name,
          unit: 'kg',
          sets: {
            [moment().unix()]: { weight: payload.weight, reps: payload.reps }
          }
        }
      }
    ).then(() => {
      return LocalForage.get(workoutState.selectedDate.format('YYYY-MM-DD')).then((res) => {
        return res;
      });
    });
    yield call(firestore.setWorkout, {
      uid: userState.uid,
      date: workoutState.selectedDate.format('YYYY-MM-DD'),
      workoutId: workoutId,
      type: LABELS[payload.label].type,
      name: payload.name,
      unit: 'kg',
      sets: {
        [moment().unix()]: { weight: payload.weight, reps: payload.reps }
      }
    });
    yield put(addLabel(LABELS[LABELS.findIndex(({ type }) => type === LABELS[payload.label].type)].type));
    yield put(addDataSuccess(data));
  } catch (e) {

  }
}
export function* addDataSaga() {
  yield takeLatest(DATA_ADD, addData);
}

function* updateData({ payload }: any) {
  try {
    const workoutState = yield select(WORKOUT_STATE);
    const userState = yield select(USER_STATE);
    const data = yield LocalForage.update(
      workoutState.selectedDate.format('YYYY-MM-DD'),
      { ...payload }
    ).then(() => {
      return LocalForage.get(workoutState.selectedDate.format('YYYY-MM-DD')).then((res) => {
        return res;
      })
    });
    yield call(firestore.setWorkout, {
      uid: userState.uid,
      date: workoutState.selectedDate.format('YYYY-MM-DD'),
      workoutId: payload.workoutId,
      type: payload.type,
      name: payload.name,
      unit: 'kg',
      sets: {
        [payload.index]: { weight: payload.weight, reps: payload.reps }
      }
    });
    const labels = utils.getUniqueItem({ [workoutState.selectedDate.format('YYYY-MM-DD')]: data });
    yield put(updateLabel(labels));
    yield put(updateDataSuccess(data));
  } catch (e) {

  }
}
export function* updateDataSaga() {
  yield takeLatest(DATA_UPDATE, updateData);
}

function* removeData({ payload }: any) {
  try {
    const workoutState = yield select(WORKOUT_STATE);
    const userState = yield select(USER_STATE);
    const data = yield LocalForage.remove(
      workoutState.selectedDate.format('YYYY-MM-DD'),
      {
        workoutId: payload.workoutId,
        timestamp: payload.timestamp,
      }
    ).then(() => {
      return LocalForage.get(workoutState.selectedDate.format('YYYY-MM-DD')).then((res) => {
        return res;
      })
    });
    yield call(firestore.removeWorkout,
      {
        uid: userState.uid,
        date: workoutState.selectedDate.format('YYYY-MM-DD'),
        workoutId: payload.workoutId,
        timestamp: payload.timestamp,
      })
    const labels = utils.getUniqueItem({ [workoutState.selectedDate.format('YYYY-MM-DD')]: data });
    yield put(updateLabel(labels));
    yield put(removeDataSuccess(data));
  } catch (e) {

  }
}
function* removeDataSaga() {
  yield takeLatest(DATA_REMOVE, removeData);
}

function* initData({ payload }: any) {
  try {
    const userState = yield select(USER_STATE);
    const datas = yield call(firestore.getWorkouts,
      { uid: userState.uid, start: payload.start, end: payload.end });
    yield put(initDataSuccess(datas))

  } catch (e) {

  }
}

function* initDataSaga() {
  yield takeLatest(INIT_DATA, initData);
}



export default function* workoutSaga() {
  yield all([
    updateSelectedDateSaga(),
    updateDataSaga(),
    removeDataSaga(),
    addDataSaga(),
    initDataSaga(),
  ])
}