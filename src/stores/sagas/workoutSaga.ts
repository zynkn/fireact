import { all, takeLatest, put, call, select } from 'redux-saga/effects'

import {
  SELECTED_DATE_UPDATE,
  updateSelectedDateSuccess,
  addLabel
} from 'stores/modules/workout';

import {
  DATA_UPDATE,
  updateDataSuccess
} from 'stores/modules/workout';

import LocalForage from 'api/LocalForage';
import utils from 'utils';
import { LABELS } from 'CONSTANTS';
import { any } from 'prop-types';

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

function* updateData({ payload }: any) {
  try {
    const workoutState = yield select(WORKOUT_STATE);
    const modalState = yield select(MODAL_STATE);


    //console.log(payload);
    // console.log(
    //   {
    //     type: LABELS[modalState.selectedLabel].type,
    //     name: modalState.workout.name,
    //     unit: 'kg',
    //     detail: [{ weight: modalState.workout.weight, reps: modalState.workout.reps }]
    //   }
    // )
    const data = yield LocalForage.set(
      workoutState.selectedDate.format('YYYY-MM-DD'),
      {
        [payload]: {
          type: LABELS[modalState.selectedLabel].type,
          name: modalState.workout.name,
          unit: 'kg',
          detail: [{ weight: modalState.workout.weight, reps: modalState.workout.reps }]
        }
      }
    ).then(() => {
      return LocalForage.get(workoutState.selectedDate.format('YYYY-MM-DD')).then((res) => {
        return res;
      });
    });
    yield put(addLabel(LABELS[LABELS.findIndex((i: any) => i.type === LABELS[modalState.selectedLabel].type)].type));
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