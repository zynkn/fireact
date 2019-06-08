import { combineReducers } from 'redux';
import workout, { WorkoutState } from './workout';
import user, { UserState } from './user';


export default combineReducers({
  workout,
  user,
});

export interface StoreState {
  workout: WorkoutState
  user: UserState
}