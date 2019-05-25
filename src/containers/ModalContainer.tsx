import React from 'react';
import Modal from 'components/common/Modal';

import { StoreState } from 'stores/modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal, selectLabel, toggleModal, removeName, inputData, controlData } from 'stores/modules/modal';
import { updateData } from 'stores/modules/workout';


interface Props {
  isOpen: boolean
  selectedLabel: number
  workout: {
    name: string
    weight: number
    reps: number
  }
  workoutId: number
  closeModal: typeof closeModal
  selectLabel: typeof selectLabel
  toggleModal: typeof toggleModal
  removeName: typeof removeName
  inputData: typeof inputData
  updateData: typeof updateData
  controlData: typeof controlData
  date: any
}

class ModalContainer extends React.Component<Props> {

  render() {
    return (
      <Modal visible={this.props.isOpen}
        selectedLabel={this.props.selectedLabel}
        closeModal={this.props.closeModal}
        selectLabel={this.props.selectLabel}
        removeName={this.props.removeName}
        inputData={this.props.inputData}
        workout={this.props.workout}
        selectedDate={this.props.date}
        updateData={this.props.updateData}
        workoutId={this.props.workoutId}
        controlData={this.props.controlData}
      />
    )
  }
}

export default connect(
  ({ modal, workout }: StoreState) => ({
    isOpen: modal.isOpen,
    workoutId: modal.id,
    selectedLabel: modal.selectedLabel,
    workout: modal.workout,
    date: workout.selectedDate,
  }),
  (dispatch) => ({
    closeModal: bindActionCreators(closeModal, dispatch),
    selectLabel: bindActionCreators(selectLabel, dispatch),
    toggleModal: bindActionCreators(toggleModal, dispatch),
    removeName: bindActionCreators(removeName, dispatch),
    inputData: bindActionCreators(inputData, dispatch),
    updateData: bindActionCreators(updateData, dispatch),
    controlData: bindActionCreators(controlData, dispatch),
  })
)(ModalContainer);