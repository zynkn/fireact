import { all } from 'redux-saga/effects'
import workoutSaga from './workoutSaga';
import userSaga from './userSaga';
export default function* roodSaga() {
  yield all([
    workoutSaga(),
    userSaga(),
  ])
}