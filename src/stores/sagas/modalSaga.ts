import { all, takeLatest, put, call } from 'redux-saga/effects'
import { OPEN_MODAL, openModalSuccess, CLOSE_MODAL, closeModalSuccess } from 'stores/modules/modal';
import { TOGGLE_MODAL, toggleModalSuccess } from 'stores/modules/modal';
import { GET_LABELS, getLabelsSuccess } from 'stores/modules/modal';

import LocalForage from 'api/LocalForage'

function* openModal({ payload = { id: 0 } }: any) {
  try {
    console.log('OPENMODAL', payload)
    yield put(openModalSuccess(payload))
  } catch (e) {
    // yield put({ type: FAILED_GET_USER_INFO, e })
  }
}
function* closeModal() {
  try {
    yield put(closeModalSuccess())
  } catch (e) {

  }
}

function* toggleModal() {
  try {
    yield put(toggleModalSuccess())
  } catch (e) {

  }
}

export function* openModalSaga() {
  yield takeLatest(OPEN_MODAL, openModal);
}

export function* closeModalSaga() {
  yield takeLatest(CLOSE_MODAL, closeModal);
}

export function* toggleModalSaga() {
  yield takeLatest(TOGGLE_MODAL, toggleModal);
}

function* getLabels() {
  try {
    const labels = yield LocalForage.getLabels().then((res) => {
      if (res === undefined || res === null) {
        return LocalForage.setLabels().then(res => res)
      } else {
        return res;
      }
    });
    yield put(getLabelsSuccess(labels))
  } catch (e) {

  }
}
function* getLabelsSaga() {
  yield takeLatest(GET_LABELS, getLabels);
}

export default function* modalSaga() {
  yield all([
    openModalSaga(),
    closeModalSaga(),
    toggleModalSaga(),
    getLabelsSaga(),
  ])
}