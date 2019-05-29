import React from 'react';
import ReactTransitionGroup from 'react-addons-css-transition-group'; // ES6

import { StoreState } from 'stores/modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal } from 'stores/modules/modal';
import { addData } from 'stores/modules/workout';

import WorkoutModal2 from 'components/common/Modal/WorkoutModal2';

interface Props {
  isOpen: boolean
  closeModal: typeof closeModal
  addData: typeof addData
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
      closeModal: props.closeModal,
      addData: props.addData,
    }
    return (
      <ModalHOC visible={props.isOpen} modal={<WorkoutModal2 {...MODAL_PROPS} />} />
    )
  }
}
export default connect(
  ({ modal }: StoreState) => ({
    isOpen: modal.isOpen,
  }),
  (dispatch) => ({
    closeModal: bindActionCreators(closeModal, dispatch),
    addData: bindActionCreators(addData, dispatch),
  })
)(ModalContainer2);