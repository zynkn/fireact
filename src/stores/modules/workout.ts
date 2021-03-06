/*
action name: <NOUN>_<VERB>

action creator name: <verb><Noun>

selector name: get<Noun>
*/


import { createAction, handleActions } from 'redux-actions';
import moment, { Moment as MomentTypes } from 'moment';
import produce from "immer"
import utils from 'utils';

export const SELECTED_DATE_UPDATE = 'workout/SELECTED_DATE_UPDATE';
export const updateSelectedDate = createAction(SELECTED_DATE_UPDATE);
const SELECTED_DATE_UPDATE_SUCCESS = 'workout/SELECTED_DATE_UPDATE_SUCCESS';
export const updateSelectedDateSuccess = createAction(SELECTED_DATE_UPDATE_SUCCESS);
const SELECTED_DATE_UPDATE_FAILURE = 'workout/SELECTED_DATE_UPDATE_FAILURE';
export const updateSelectedDateFailure = createAction(SELECTED_DATE_UPDATE_FAILURE);

export const LABEL_ADD = 'workout/LABEL_ADD';
export const addLabel = createAction(LABEL_ADD);

export const LABEL_UPDATE = 'workout/LABEL_UPDATE';
export const updateLabel = createAction(LABEL_UPDATE);

export const DATA_ADD = 'workout/DATA_ADD';
export const addData = createAction(DATA_ADD);
const DATA_ADD_SUCCESS = 'workout/DATA_ADD_SUCCESS';
export const addDataSuccess = createAction(DATA_ADD_SUCCESS);

export const DATA_UPDATE = 'workout/DATA_UPDATE';
export const updateData = createAction(DATA_UPDATE);
const DATA_UPDATE_SUCCESS = 'workout/DATA_UPDATE_SUCCESS';
export const updateDataSuccess = createAction(DATA_UPDATE_SUCCESS);

export const DATA_REMOVE = 'workout/DATA_REMOVE';
export const removeData = createAction(DATA_REMOVE);
const DATA_REMOVE_SUCCESS = 'workout/DATA_REMOVE_SUCCESS';
export const removeDataSuccess = createAction(DATA_REMOVE_SUCCESS);

export const INITIALIZE_DATA = 'workout/INITIALIZE_DATA';
export const initializeData = createAction(INITIALIZE_DATA);


export const INIT_DATA = 'workout/INIT_DATA';
export const initData = createAction(INIT_DATA);
const INIT_DATA_SUCCESS = 'workout/INIT_DATA_SUCCESS';
export const initDataSuccess = createAction(INIT_DATA_SUCCESS);


export interface WorkoutState {
  data: { [key: string]: WorkoutDataProps }
  selectedDate: MomentTypes
  labels: {
    [key: string]: Array<string>
  }
}
export interface WorkoutDataProps {
  type: string
  name: string
  weightUnit?: string
  detail: Array<{ weight: number, reps: number }>
  [key: string]: any
}


const initialState: WorkoutState = {
  selectedDate: moment(),
  labels: {},
  data: {

  },
}

export default handleActions({

  [SELECTED_DATE_UPDATE_SUCCESS]: (state, action: any) => {
    return produce(state, draft => {
      draft.selectedDate = action.payload.date
      draft.data = action.payload.data || [];
      draft.labels = { ...draft.labels, ...action.payload.labels }
    });
  },
  [LABEL_UPDATE]: (state, { payload }: any) => {
    return produce(state, draft => {
      draft.labels = { ...state.labels, ...payload };
    });
  },
  [LABEL_ADD]: (state, { payload }: any) => {
    return produce(state, draft => {
      if (state.labels[state.selectedDate.format('YYYY-MM-DD')] === undefined) {
        draft.labels[state.selectedDate.format('YYYY-MM-DD')] = [payload];
      } else if (!state.labels[state.selectedDate.format('YYYY-MM-DD')].includes(payload)) {
        draft.labels[state.selectedDate.format('YYYY-MM-DD')].push(payload);
      }
    })
  },
  [DATA_ADD_SUCCESS]: (state, action: any) => {
    return produce(state, draft => {
      draft.data = action.payload;
    })
  },
  [DATA_UPDATE_SUCCESS]: (state, action: any) => {
    return produce(state, draft => {
      draft.data = action.payload;
    });
  },
  [DATA_REMOVE_SUCCESS]: (state, action: any) => {
    return produce(state, draft => {
      draft.data = action.payload
    })
  },
  // 삭제 요망
  [INITIALIZE_DATA]: (state, action: any) => {
    return produce(state, draft => {
      draft.data = action.payload.data || [];
      draft.labels = action.payload.labels;
    })
  },
  [INIT_DATA_SUCCESS]: (state, action: any) => {
    console.log(action.payload);
    return produce(state, draft => {
      draft.data = action.payload[state.selectedDate.format('YYYY-MM-DD')]
      draft.labels = utils.getUniqueItem(action.payload)
    });
  }


}, initialState);