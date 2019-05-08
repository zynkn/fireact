import { createAction, handleActions } from 'redux-actions';

const GET_WORKOUT = 'workout/GET_WORKOUT';

export const getWorkout = createAction(GET_WORKOUT);

export interface WorkoutState {
  data: Array<WorkoutDataProps>
}
export interface WorkoutDataProps {
  type: string,
  name: string,
  weightUnit?: string,
  detail: Array<{ weight: number, reps: number }>
}

const initialState: WorkoutState = {
  data: [{
    type: 'chest',
    name: '벤치 프레스',
    weightUnit: 'kg',
    detail: [
      {
        weight: 17.5,
        reps: 10
      }, {
        weight: 17.5,
        reps: 10
      }
    ]
  }]
}

export default handleActions({
  [GET_WORKOUT]: (state, action) => {
    return { ...state }
  },

}, initialState);