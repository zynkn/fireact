import { all, takeLatest, put, call } from 'redux-saga/effects'
import { OPEN_MODAL, openModalSuccess, CLOSE_MODAL, closeModalSuccess } from 'stores/modules/modal';
import { TOGGLE_MODAL, toggleModalSuccess } from 'stores/modules/modal';

function* openModal({ payload }: any) {
  try {
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

export default function* modalSaga() {
  yield all([
    openModalSaga(),
    closeModalSaga(),
    toggleModalSaga(),
  ])
}