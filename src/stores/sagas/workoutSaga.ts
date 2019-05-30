import { all, takeLatest, put, call, select } from 'redux-saga/effects'

import {
  SELECTED_DATE_UPDATE,
  updateSelectedDateSuccess,
  addLabel,
} from 'stores/modules/workout';
import {
  DATA_ADD,
  addDataSuccess
} from 'stores/modules/workout';

import {
  DATA_UPDATE,
  updateDataSuccess
} from 'stores/modules/workout';

import {
  DATA_EDIT,
  editDataSuccess
} from 'stores/modules/workout';

import LocalForage from 'api/LocalForage';
import utils from 'utils';
import { LABELS } from 'CONSTANTS';
import moment from 'moment';

const WORKOUT_STATE = (state: any) => state.workout
const MODAL_STATE = (state: any) => state.modal

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

interface workoutProps {
  name: string
  weight: number
  reps: number
  label: number
}
function* addData({ payload }: any) {
  try {
    const modalState = yield select(MODAL_STATE);
    const workoutState = yield select(WORKOUT_STATE);
    const id = modalState.id || moment().unix()
    const data = yield LocalForage.set(
      workoutState.selectedDate.format('YYYY-MM-DD'),
      {
        [id]: {
          type: LABELS[payload.label].type,
          name: payload.name,
          unit: 'kg',
          detail: [{ weight: payload.weight, reps: payload.reps }]
        }
      }
    ).then(() => {
      return LocalForage.get(workoutState.selectedDate.format('YYYY-MM-DD')).then((res) => {
        return res;
      });
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
    console.log(payload);
    const workoutState = yield select(WORKOUT_STATE);
    const data = yield LocalForage.update(
      workoutState.selectedDate.format('YYYY-MM-DD'),
      {
        timestamp: payload.id,
        index: payload.index,
        reps: payload.reps,
        weight: payload.weight,
      }
    ).then((ss) => {
      console.log(ss);
      return LocalForage.get(workoutState.selectedDate.format('YYYY-MM-DD')).then((res) => {
        console.log(res);
        return res;
      })
    })
    yield put(updateDataSuccess(data));
  } catch (e) {

  }
}
export function* updateDataSaga() {
  yield takeLatest(DATA_UPDATE, updateData);
}

function* editData({ payload }: any) {
  try {
    console.log('editdata');
    const workoutState = yield select(WORKOUT_STATE);
    const modalState = yield select(MODAL_STATE);
    const data = yield LocalForage.update(
      workoutState.selectedDate.format('YYYY-MM-DD'),
      {
        timestamp: modalState.id,
        index: modalState.selectedIndex,
        reps: modalState.workout.reps,
        weight: modalState.workout.weight,
      }
    ).then(() => {
      return LocalForage.get(workoutState.selectedDate.format('YYYY-MM-DD')).then((res) => {
        return res;
      })
    })
    yield put(updateDataSuccess(data));
  } catch (e) {

  }
}
function* editDataSaga() {
  yield takeLatest(DATA_EDIT, editData);
}

export default function* workoutSaga() {
  yield all([
    updateSelectedDateSaga(),
    updateDataSaga(),
    editDataSaga(),
    addDataSaga(),
  ])
}