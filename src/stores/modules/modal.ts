import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { LABELS } from 'CONSTANTS';
import LocalForage from 'api/LocalForage';

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


export interface ModalState {
  isOpen: boolean
  selectedLabel: number
  storedLabels: any
  workoutName: string
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
  workoutName: '',
  workout: {
    name: '',
    weight: 0,
    reps: 0,
  },
  storedLabels: [],
  // storedLabels: [
  //   { color: 'yellow', name: '유산소', eng: 'run' },
  //   { color: 'green', name: '등', eng: 'back' },
  //   { color: 'skyblue', name: '가슴', eng: 'chest' },
  //   { color: 'blue', name: '삼두', eng: 'triceps' },
  //   { color: 'purple', name: '이두', eng: 'biceps' },
  //   { color: 'orange', name: '어깨', eng: 'shoulder' },
  //   { color: 'brown', name: '하체', eng: 'legs' },
  //   { color: 'red', name: '복부', eng: 'abs' },
  // ]
}


export default handleActions({
  [OPEN_MODAL_SUCCESS]: (state, { payload }: any) => {
    return produce(state, draft => {

      draft.isOpen = true;
      if (payload) {
        draft.workout = payload.workout;
        draft.selectedLabel = LABELS.findIndex((i: any) => { if (i.type === payload.selectedLabel) return i })
        draft.id = payload.id;
      } else {

        console.log('??')
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
  [TOGGLE_MODAL_SUCCESS]: (state) => {
    return produce(state, draft => {
      draft.isOpen = !draft.isOpen
    })
  },
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

}, initialState)