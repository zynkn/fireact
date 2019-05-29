import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { LABELS, getLabelIndex } from 'CONSTANTS';


export const OPEN_MODAL = 'modal/OPEN_MODAL';
const OPEN_MODAL_SUCCESS = 'modal/OPEN_MODAL_SUCCESS';

export const CLOSE_MODAL = 'modal/CLOSE_MODAL';
const CLOSE_MODAL_SUCCESS = 'modal/CLOSE_MODAL_SUCCESS';

export const TOGGLE_MODAL = 'modal/TOGGLE_MODAL';
const TOGGLE_MODAL_SUCCESS = 'modal/TOGGLE_MODAL_SUCCESS';

export const GET_LABELS = 'modal/GET_LABELS';
const GET_LABELS_SUCCESS = 'modal/GET_LABELS_SUCCESS';

const SELECT_LABEL = 'modal/SELECT_LABEL';
const REMOVE_NAME = 'modal/REMOVE_NAME';
const INPUT_DATA = 'modal/INPUT_DATA';
const CONTROL_DATA = 'modal/CONTROL_DATA';


export const openModal = createAction(OPEN_MODAL);
export const openModalSuccess = createAction(OPEN_MODAL_SUCCESS);
export const closeModal = createAction(CLOSE_MODAL);
export const closeModalSuccess = createAction(CLOSE_MODAL_SUCCESS);
export const toggleModal = createAction(TOGGLE_MODAL);
export const toggleModalSuccess = createAction(TOGGLE_MODAL_SUCCESS);
export const getLabels = createAction(GET_LABELS);
export const getLabelsSuccess = createAction(GET_LABELS_SUCCESS);


export const selectLabel = createAction(SELECT_LABEL);
export const removeName = createAction(REMOVE_NAME);
export const inputData = createAction(INPUT_DATA);
export const controlData = createAction(CONTROL_DATA);


export interface ModalState {
  isOpen: boolean
  id: number
}

const initialState: ModalState = {
  isOpen: false,
  id: 0
}


export default handleActions({
  [OPEN_MODAL_SUCCESS]: (state, { payload }: any) => {
    return produce(state, draft => {
      draft.isOpen = true;
      draft.id = payload.id;
    })
  },
  [CLOSE_MODAL_SUCCESS]: (state) => {
    return produce(state, draft => {
      draft.isOpen = false
      draft.id = 0
    })
  },
}, initialState)