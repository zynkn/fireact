
import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/workoutAPI';

const GET_WORKOUT = 'workout/GET_WORKOUT';
const SET_WORKOUT = 'workout/SET_WORKOUT';
const DEL_WORKOUT = 'workout/DEL_WORKOUT';
const EDIT_NAME = 'workout/EDIT_NAME';
const LOADING = 'workout/LOADING';
const SELECT_DATE = 'workout/SELECT_DATE';

export const getWorkout = createAction(GET_WORKOUT, api.getWorkout);
export const setWorkout = createAction(SET_WORKOUT, api.setWorkout);
// export const delWorkout = createAction(DEL_WORKOUT, api.delWorkout);
export const editName = createAction(EDIT_NAME, api.editName);
export const loading = createAction(LOADING);
export const selectDate = createAction(SELECT_DATE);

const initialState = Map({
  data: [],
  isLoading: false,
  selected: '',
});

export default handleActions({
  [SELECT_DATE]: (state, action) => {
    return state.set('selected', action.payload)
  },
  [LOADING]: (state, action) => {
    return state.set('isLoading', true)
  },
  ...pender({
    type: EDIT_NAME,
    onSuccess: (state, action) => {
      return state
    }
  }),
  ...pender({
    type: SET_WORKOUT,
    onSuccess: (state, action) => {
      return state
    }
  }),
  ...pender({
    type: GET_WORKOUT,
    onSuccess: (state, action) => {
      // console.log(action.payload.data);
      return state.set('data', action.payload.data)
        .set('isLoading', false);
    }
  }),
}, initialState);