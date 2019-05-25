import React from 'react';
import ReactTransitionGroup from 'react-addons-css-transition-group'; // ES6

import { StoreState } from 'stores/modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal, openModal, controlData, toggleModal, selectLabel, inputData, removeName } from 'stores/modules/modal';
import { updateData } from 'stores/modules/workout';

import WorkoutModal from 'components/common/Modal/WorkoutModal';

interface Props {
  isOpen: boolean
  selectedLabel: number
  workoutId: number
  workout: {
    name: string
    weight: number
    reps: number
  }
  toggleModal: typeof toggleModal
  selectLabel: typeof selectLabel
  inputData: typeof inputData
  removeName: typeof removeName
  controlData: typeof controlData
  updateData: typeof updateData
  closeModal: typeof closeModal
}

const ModalHOC = (props: any) => {

  return (
    <>
      {
        props.visible ?
          <ReactTransitionGroup
            transitionName={'anim'}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            {props.modal}
          </ReactTransitionGroup>
          :
          <ReactTransitionGroup
            transitionName={'anim'}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          />

      }
    </>
  )
}

class ModalContainer2 extends React.Component<Props> {
  render() {

    const { props } = this;
    const MODAL_PROPS = {
      workout: props.workout,
      workoutId: props.workoutId,
      selectedLabel: props.selectedLabel,
      selectLabel: props.selectLabel,
      inputData: props.inputData,
      removeName: props.removeName,
      controlData: props.controlData,
      updateData: props.updateData,
      closeModal: props.closeModal,
    }
    return (
      <ModalHOC visible={props.isOpen} modal={<WorkoutModal {...MODAL_PROPS} />} />
    )
  }
}


export default connect(
  ({ modal }: StoreState) => ({
    isOpen: modal.isOpen,
    selectedLabel: modal.selectedLabel,
    workout: modal.workout,
    workoutId: modal.id,
  }),
  (dispatch) => ({
    toggleModal: bindActionCreators(toggleModal, dispatch),
    selectLabel: bindActionCreators(selectLabel, dispatch),
    inputData: bindActionCreators(inputData, dispatch),
    removeName: bindActionCreators(removeName, dispatch),
    controlData: bindActionCreators(controlData, dispatch),
    updateData: bindActionCreators(updateData, dispatch),
    closeModal: bindActionCreators(closeModal, dispatch),
  })
)(ModalContainer2);