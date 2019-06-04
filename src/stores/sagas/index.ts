import { all } from 'redux-saga/effects'
import workoutSaga from './workoutSaga';
export default function* roodSaga() {
  yield all([
    workoutSaga(),
  ])
}