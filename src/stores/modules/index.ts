import { combineReducers } from 'redux';
import workout, { WorkoutState } from './workout';
import modal, { ModalState } from './modal';

export default combineReducers({
  workout,
  modal
});

export interface StoreState {
  workout: WorkoutState
  modal: ModalState
}