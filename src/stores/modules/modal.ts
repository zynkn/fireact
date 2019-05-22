import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import LocalForage from 'api/LocalForage';

export const OPEN_MODAL = 'modal/OPEN_MODAL';
const OPEN_MODAL_SUCCESS = 'modal/OPEN_MODAL_SUCCESS';

export const CLOSE_MODAL = 'modal/CLOSE_MODAL';
const CLOSE_MODAL_SUCCESS = 'modal/CLOSE_MODAL_SUCCESS';

export const TOGGLE_MODAL = 'modal/TOGGLE_MODAL';
const TOGGLE_MODAL_SUCCESS = 'modal/TOGGLE_MODAL_SUCCESS';

const SELECT_LABEL = 'modal/SELECT_LABEL';
const REMOVE_NAME = 'modal/REMOVE_NAME';
const INPUT_NAME = 'modal/INPUT_NAME';
const INPUT_DATA = 'modal/INPUT_DATA';
const CHANGE_DATA = 'modal/CHANGE_DATA';
const SAVE_DATA = 'modal/SAVE_DATA';

export const openModal = createAction(OPEN_MODAL);
export const openModalSuccess = createAction(OPEN_MODAL_SUCCESS);
export const closeModal = createAction(CLOSE_MODAL);
export const closeModalSuccess = createAction(CLOSE_MODAL_SUCCESS);
export const toggleModal = createAction(TOGGLE_MODAL);
export const toggleModalSuccess = createAction(TOGGLE_MODAL_SUCCESS);



export const selectLabel = createAction(SELECT_LABEL);
export const removeName = createAction(REMOVE_NAME);
export const inputName = createAction(INPUT_NAME);
export const inputData = createAction(INPUT_DATA);
export const changeData = createAction(CHANGE_DATA);
export const saveData = createAction(SAVE_DATA);

export interface ModalState {
  isOpen: boolean
  selectedLabel: number
  storedLabels: Array<any>
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
  storedLabels: [
    { color: 'yellow', name: '유산소', eng: 'run' },
    { color: 'green', name: '등', eng: 'back' },
    { color: 'skyblue', name: '가슴', eng: 'chest' },
    { color: 'blue', name: '삼두', eng: 'triceps' },
    { color: 'purple', name: '이두', eng: 'biceps' },
    { color: 'orange', name: '어깨', eng: 'shoulder' },
    { color: 'brown', name: '하체', eng: 'legs' },
    { color: 'red', name: '복부', eng: 'abs' },
  ]
}


export default handleActions({
  [OPEN_MODAL_SUCCESS]: (state, { payload }: any) => {
    console.log(payload);
    return produce(state, draft => {
      draft.isOpen = true;
      if (payload) {
        draft.workout = payload.workout;
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
  [TOGGLE_MODAL_SUCCESS]: (state) => {
    return produce(state, draft => {
      draft.isOpen = !draft.isOpen
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
  [INPUT_NAME]: (state, { payload }: any) => {
    return produce(state, draft => {
      draft.workoutName = payload;
    })
  },
  [INPUT_DATA]: (state, { payload }: any) => {

    return produce(state, draft => {
      draft.workout[payload.name] = payload.value
    })
  },
  [CHANGE_DATA]: (state, { paylaod }: any) => {
    return produce(state, draft => {

    })
  },
  [SAVE_DATA]: (state, { payload }: any) => {

    LocalForage.set(payload, {
      date: payload,
      data: [{
        type: state.storedLabels[state.selectedLabel].eng,
        name: state.workout.name,
        unit: 'kg',
        detail: [
          { weight: state.workout.weight, reps: state.workout.reps }
        ]
      }]
    })

    //add({ date: payload, name: state.workout.name, set: [{ weight: state.workout.weight, reps: state.workout.reps }, { weight: state.workout.weight, reps: state.workout.reps }] })
    return produce(state, draft => {

    })
  }
}, initialState)