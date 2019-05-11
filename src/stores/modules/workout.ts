import { createAction, handleActions } from 'redux-actions';
import moment, { Moment as MomentTypes } from 'moment';
import produce from "immer"


export const CHANGE_MONTH = 'workout/CHANGE_MONTH';
const CHANGE_MONTH_ASYNC = 'workout/CHANGE_MONTH_ASYNC';

export const SELECT_DATE = 'workout/SELECT_DATE';
const SELECT_DATE_ASYNC = 'workout/SELECT_DATE_ASYNC';

export const changeMonth = createAction(CHANGE_MONTH);
export const changeMonthAsync = createAction(CHANGE_MONTH_ASYNC);
export const selectDate = createAction(SELECT_DATE);
export const selectDateAsync = createAction(SELECT_DATE_ASYNC);

export interface WorkoutState {
  data: Array<WorkoutDataProps>
  date: MomentTypes
  labels: {
    [key: string]: Array<string>
  }
}
export interface WorkoutDataProps {
  type: string,
  name: string,
  weightUnit?: string,
  detail: Array<{ weight: number, reps: number }>
}

const initialState: WorkoutState = {
  date: moment(),
  labels: {
    '2019-05-10': ['yellow', 'purple'],
    '2019-05-11': ['blue', 'red'],
    '2019-05-12': ['green'],
    '2019-05-31': ['red']
  },
  data: [{
    type: 'chest',
    name: '벤치 프레스',
    weightUnit: 'kg',
    detail: [
      { weight: 17.5, reps: 10 },
      { weight: 17.5, reps: 10 },
      { weight: 17.5, reps: 10 },
      { weight: 17.5, reps: 10 },
      { weight: 17.5, reps: 10 },
      { weight: 17.5, reps: 10 },
      { weight: 17.5, reps: 10 }
    ]
  }]
}

export default handleActions({
  [CHANGE_MONTH_ASYNC]: (state, action: any) => {
    return produce(state, draft => {
      let clone = draft.date.clone();
      if (action.payload === 'next') {
        draft.date = clone.add(1, 'month')
      } else if (action.payload === 'previous') {
        draft.date = clone.subtract(1, 'month')
      } else {
        draft.date = moment()
      }
    })
  },
  [SELECT_DATE_ASYNC]: (state, action: any) => {
    return produce(state, draft => {
      draft.date = action.payload
    })
  }

}, initialState);