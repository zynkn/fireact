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
  selectedLabel: number
  storedLabels: any
  id: number
  workout: {
    name: string
    weight: number
    reps: number
    [key: string]: any
  }
}

const initialState: ModalState = {
  isOpen: false,
  id: 0,
  selectedLabel: 0,
  workout: {
    name: '',
    weight: 0,
    reps: 0,
  },
  storedLabels: [],
}


export default handleActions({
  [OPEN_MODAL_SUCCESS]: (state, { payload }: any) => {
    console.log(payload);
    return produce(state, draft => {
      draft.isOpen = true;
      if (payload) {
        draft.workout = payload.workout;
        // draft.selectedLabel = LABELS.findIndex((i: any) => { if (i.type === payload.selectedLabel) return i })
        draft.selectedLabel = getLabelIndex(payload.selectedLabel);
        draft.id = payload.id;
      } else {
        draft.workout = {
          name: '',
          weight: 0,
          reps: 0,
        }
      }
    })
  },
  [CLOSE_MODAL_SUCCESS]: (state) => {
    return produce(state, draft => {
      draft.isOpen = false
    })
  },

  /*적폐 청산 대상*/
  [TOGGLE_MODAL_SUCCESS]: (state) => {
    return produce(state, draft => {
      draft.isOpen = !draft.isOpen
    })
  },
  /*적폐 청산 대상 */
  [GET_LABELS_SUCCESS]: (state, action: any) => {
    return produce(state, draft => {
      draft.storedLabels = action.payload;
    })
  },
  [SELECT_LABEL]: (state, action: any) => {
    return produce(state, draft => {
      draft.selectedLabel = action.payload;
    })
  },
  [REMOVE_NAME]: (state, { payload = { name: 'name' } }: any) => {
    return produce(state, draft => {
      draft.workout[payload.name] = ''
    })
  },
  [INPUT_DATA]: (state, { payload }: any) => {
    return produce(state, draft => {
      draft.workout[payload.name] = payload.value
    })
  },
  [CONTROL_DATA]: (state, { payload }: any) => {
    let unit = payload.unit || 1;
    return produce(state, draft => {
      if (payload.action === 'decrease') {
        draft.workout[payload.name] = Number(draft.workout[payload.name]) - unit < 0 ? 0 : Number((Number(draft.workout[payload.name]) - unit).toFixed(2));
      } else if (payload.action === 'increase') {
        draft.workout[payload.name] = Number((Number(draft.workout[payload.name]) + unit).toFixed(2));
      }

    })
  }

}, initialState)