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
  controlData: any
}

const Modal: React.FC<Props> = (props) => {

  const NUMBER_ONLY = /^[0-9]{0,4}\.{0,1}[0-9]{0,2}$/;
  const INTEGER_ONLY = /^[0-9]{0,3}$/;
  const LENGTH_RESTRICT = /^.{0,4}$/;
  const updateData = () => {
    let id = props.workoutId || moment().unix();
    props.updateData(id);
    props.closeModal()
  }

  const onChangeHandle = (name: string, e: any, regex?: any) => {
    console.log(e.target.value);
    if (regex.test(e.target.value)) {
      props.inputData({ name: name, value: e.target.value });
    }
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
                <Input className={LABELS[props.selectedLabel].color}
                  onChange={(e: any) => onChangeHandle('name', e, LENGTH_RESTRICT)} name='name' value={props.workout.name}
                  hasBtn={true} btnClick={() => props.removeName()} />
                <IconBtn icon={<Check width='16px' fill='#F76304' />} />
              </div>

              <div className="ModalBody">
                <div className="row">
                  <span className={`txt ${LABELS[props.selectedLabel].color}`}>Weight</span>
                  <div className="wrap">
                    <Input style={{ width: '80px' }} onChange={(e: any) => onChangeHandle('weight', e, NUMBER_ONLY)} name='weight' value={props.workout.weight} />
                    <IconBtn icon={<ArrowDown />} style={{ marginLeft: '8px' }} onClick={() => props.controlData({ name: 'weight', action: 'decrease' })} />
                    <IconBtn icon={<ArrowUp />} style={{ marginLeft: '8px' }} onClick={() => props.controlData({ name: 'weight', action: 'increase' })} />
                  </div>
                </div>
                <div className="row" style={{ justifyContent: 'flex-end' }}>
                  <button className="unitBtn" onClick={() => props.controlData({ name: 'weight', action: 'increase', unit: 2.5 })}>2.5kg</button>
                  <button className="unitBtn" onClick={() => props.controlData({ name: 'weight', action: 'increase', unit: 5 })}>5kg</button>
                  <button className="unitBtn" onClick={() => props.controlData({ name: 'weight', action: 'increase', unit: 10 })}>10kg</button>
                </div>
                <div className="row">
                  <span className={`txt ${LABELS[props.selectedLabel].color}`}>Reps</span>
                  <div className="wrap">
                    <Input style={{ width: '80px' }} onChange={(e: any) => onChangeHandle('reps', e, INTEGER_ONLY)} name='reps' value={props.workout.reps} />
                    <IconBtn icon={<ArrowDown />} style={{ marginLeft: '8px' }} onClick={() => props.controlData({ name: 'reps', action: 'decrease' })} />
                    <IconBtn icon={<ArrowUp />} style={{ marginLeft: '8px' }} onClick={() => props.controlData({ name: 'reps', action: 'increase' })} />
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