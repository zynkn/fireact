import { combineReducers } from 'redux';
import workout, { WorkoutState } from './workout';

export default combineReducers({
  workout
});

export interface StoreState {
  workout: WorkoutState
}