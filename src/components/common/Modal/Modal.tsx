import React from 'react';
import ReactTransitionGroup from 'react-addons-css-transition-group'; // ES6
import './Modal.scss';
import IconBtn from 'components/common/IconBtn';
import Input from 'components/common/Input';
import { ArrowDown, ArrowUp, Check } from 'components/common/Icons';
import moment, { Moment as MomentTypes } from "moment";
import { LABELS } from 'CONSTANTS';

interface Props {
  visible: boolean
  labels: Array<any>
  selectedLabel: number
  workoutId: number
  workout: {
    name: string
    weight: number
    reps: number
  }
  selectedDate: any
  closeModal?: any
  selectLabel?: any
  inputData: any
  removeName: any
  updateData: any
}

const Modal: React.FC<Props> = (props) => {
  const updateData = () => {

    let id = props.workoutId || moment().unix();
    props.updateData({
      [id]: {
        type: LABELS[props.selectedLabel].type,
        name: props.workout.name, unit: 'kg',
        detail: [{ weight: props.workout.weight, reps: props.workout.reps }]
      }
    });
    props.closeModal()
  }
  return (
    <>
      {
        props.visible ?
          <ReactTransitionGroup
            transitionName={'anim'}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            <div className="ModalOverlay" onClick={() => props.closeModal()} />
            <div className="Modal">
              <div className="ModalTop">
                <div className="label-wrap">
                  {
                    LABELS.map((i, j) => {
                      return (
                        <span key={j} onClick={() => props.selectLabel(j)} className={`label ${i.color} ${props.selectedLabel === j ? 'selected' : ''}`}>{i.name}</span>
                      )
                    })
                  }
                </div>
              </div>

              <div className="ModalHead">
                <Input className={LABELS[props.selectedLabel].color} onChange={props.inputData} name='name' value={props.workout.name} hasBtn={true} btnClick={() => props.removeName()} />
                <IconBtn icon={<Check width='16px' fill='#F76304' />} />
              </div>

              <div className="ModalBody">
                <div className="row">
                  <span className={`txt ${LABELS[props.selectedLabel].color}`}>Weight</span>
                  <div className="wrap">
                    <Input style={{ width: '80px' }} onChange={props.inputData} name='weight' value={props.workout.weight} />
                    <IconBtn icon={<ArrowDown />} style={{ marginLeft: '8px' }} />
                    <IconBtn icon={<ArrowUp />} style={{ marginLeft: '8px' }} />
                  </div>
                </div>
                <div className="row">

                </div>
                <div className="row">
                  <span className={`txt ${LABELS[props.selectedLabel].color}`}>Reps</span>
                  <div className="wrap">
                    <Input style={{ width: '80px' }} onChange={props.inputData} name='reps' value={props.workout.reps} />
                    <IconBtn icon={<ArrowDown />} style={{ marginLeft: '8px' }} />
                    <IconBtn icon={<ArrowUp />} style={{ marginLeft: '8px' }} />
                  </div>
                </div>
              </div>

              <div className="ModalFoot">
                <button>Cancel</button>
                {/* <button onClick={() => { props.saveData(props.selectedDate.format('YYYY-MM-DD')); props.closeModal() }}>Confirm</button> */}
                <button onClick={() => { updateData() }}>Confirm</button>

              </div>


            </div>
          </ReactTransitionGroup>
          :
          <ReactTransitionGroup
            transitionName={'anim'}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
          </ReactTransitionGroup>
      }
    </>
  )
}

export default Modal;