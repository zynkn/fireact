/*
action name: <NOUN>_<VERB>

action creator name: <verb><Noun>

selector name: get<Noun>
*/



import { createAction, handleActions } from 'redux-actions';
import moment, { Moment as MomentTypes } from 'moment';
import produce from "immer"


export const SELECTED_DATE_UPDATE = 'workout/SELECTED_DATE_UPDATE';
export const updateSelectedDate = createAction(SELECTED_DATE_UPDATE);
const SELECTED_DATE_UPDATE_SUCCESS = 'workout/SELECTED_DATE_UPDATE_SUCCESS';
export const updateSelectedDateSuccess = createAction(SELECTED_DATE_UPDATE_SUCCESS);
const SELECTED_DATE_UPDATE_FAILURE = 'workout/SELECTED_DATE_UPDATE_FAILURE';
export const updateSelectedDateFailure = createAction(SELECTED_DATE_UPDATE_FAILURE);

export const LABEL_ADD = 'workout/LABEL_ADD';
export const addLabel = createAction(LABEL_ADD);


// TODO: Name change (UPDATE => ADD) 
export const DATA_UPDATE = 'workout/DATA_UPDATE';
export const updateData = createAction(DATA_UPDATE);
const DATA_UPDATE_SUCCESS = 'workout/DATA_UPDATE_SUCCESS';
export const updateDataSuccess = createAction(DATA_UPDATE_SUCCESS);

export const DATA_ADD = 'workout/DATA_ADD';
export const addData = createAction(DATA_ADD);
const DATA_ADD_SUCCESS = 'workout/DATA_ADD_SUCCESS';
export const addDataSuccess = createAction(DATA_ADD_SUCCESS);


// TODO: Name change (EDIT => UPDATE);
export const DATA_EDIT = 'workout/DATA_EDIT';
export const editData = createAction(DATA_EDIT);
const DATA_EDIT_SUCCESS = 'workout/DATA_EDIT_SUCCESS';
export const editDataSuccess = createAction(DATA_EDIT_SUCCESS);

export const DATA_INIT = 'workout/DATA_INIT';
export const initData = createAction(DATA_INIT);

export const INITIALIZE_DATA = 'workout/INITIALIZE_DATA';
export const initializeData = createAction(INITIALIZE_DATA);


const SET_CALENDAR_LABELS = 'workout/SET_CALENDAR_LABELS';
export const setCalendarLabels = createAction(SET_CALENDAR_LABELS);




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
  [LABEL_ADD]: (state, { payload }: any) => {
    console.log(payload);
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
  [DATA_EDIT_SUCCESS]: (state, action: any) => {
    return produce(state, draft => {

    })
  },
  [INITIALIZE_DATA]: (state, action: any) => {
    return produce(state, draft => {
      draft.data = action.payload.data || [];
      draft.labels = action.payload.labels;
    })
  }


}, initialState);