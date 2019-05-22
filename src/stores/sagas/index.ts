import { all } from 'redux-saga/effects'
import workoutSaga from './workoutSaga';
import modalSaga from './modalSaga';

export default function* roodSaga() {
  yield all([
    workoutSaga(),
    modalSaga()
  ])
}