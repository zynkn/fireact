/*
action name: <NOUN>_<VERB>

action creator name: <verb><Noun>

selector name: get<Noun>
*/



import { createAction, handleActions } from 'redux-actions';
import moment, { Moment as MomentTypes } from 'moment';
import produce from "immer"
import LocalForage from 'api/LocalForage'

export const SELECTED_DATE_UPDATE = 'workout/SELECTED_DATE_UPDATE';
export const updateSelectedDate = createAction(SELECTED_DATE_UPDATE);
const SELECTED_DATE_UPDATE_SUCCESS = 'workout/SELECTED_DATE_UPDATE_SUCCESS';
export const updateSelectedDateSuccess = createAction(SELECTED_DATE_UPDATE_SUCCESS);
const SELECTED_DATE_UPDATE_FAILURE = 'workout/SELECTED_DATE_UPDATE_FAILURE';
export const updateSelectedDateFailure = createAction(SELECTED_DATE_UPDATE_FAILURE);



export const DATA_UPDATE = 'workout/DATA_UPDATE';
export const updateData = createAction(DATA_UPDATE);
const DATA_UPDATE_SUCCESS = 'workout/DATA_UPDATE_SUCCESS';
export const updateDataSuccess = createAction(DATA_UPDATE_SUCCESS);

export const DATA_INIT = 'workout/DATA_INIT';
export const initData = createAction(DATA_INIT);

export const INITIALIZE_DATA = 'workout/INITIALIZE_DATA';
export const initializeData = createAction(INITIALIZE_DATA);


const SET_CALENDAR_LABELS = 'workout/SET_CALENDAR_LABELS';
export const setCalendarLabels = createAction(SET_CALENDAR_LABELS);




export interface WorkoutState {
  data: Array<WorkoutDataProps>
  selectedDate: MomentTypes
  labels: {
    [key: string]: Array<string>
  }
}
export interface WorkoutDataProps {
  id: number,
  type: string,
  name: string,
  weightUnit?: string,
  detail: Array<{ weight: number, reps: number }>
}


const initialState: WorkoutState = {
  selectedDate: moment(),
  labels: {},
  data: [],
}

export default handleActions({

  [SELECTED_DATE_UPDATE_SUCCESS]: (state, action: any) => {
    return produce(state, draft => {
      draft.selectedDate = action.payload.date
      draft.data = action.payload.data || []
    });
  },

  [DATA_UPDATE_SUCCESS]: (state, action: any) => {
    let date = state.selectedDate.format('YYYY-MM-DD');
    return produce(state, draft => {
      if (!draft.labels.hasOwnProperty(date)) {
        draft.labels[date] = [action.payload.type];
      } else if (!draft.labels[date].includes(action.payload.type)) {
        draft.labels[date].push(action.payload.type);
      }
      draft.data.push(action.payload);
    });
  },
  [INITIALIZE_DATA]: (state, action: any) => {
    return produce(state, draft => {
      draft.data = action.payload.data || [];
      draft.labels = action.payload.labels;
    })
  }


}, initialState);