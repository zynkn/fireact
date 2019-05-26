import React from 'react';
import './common.scss';
import IconBtn from 'components/common/IconBtn';
import Input from 'components/common/Input';
import moment from "moment";
import { ArrowDown, ArrowUp, Check, Cancel } from 'components/common/Icons';
import { LABELS } from 'CONSTANTS';


const WorkoutModal = (props: any) => {
  const NUMBER_ONLY = /^[0-9]{0,3}\.{0,1}[0-9]{0,2}$/;
  const INTEGER_ONLY = /^[0-9]{0,3}$/;
  const LENGTH_RESTRICT = /^.{0,32}$/;

  const onChangeHandle = (name: string, e: any, regex?: any) => {
    if (regex.test(e.target.value)) {
      props.inputData({ name: name, value: e.target.value });
    }
  }
  const updateData = () => {

    if (isActive()) {
      let id = props.workoutId || moment().unix();
      props.updateData(id);
      props.closeModal()
    }

  }

  const isActive = () => {

    if (props.workout.name && props.workout.reps > 0) {
      return `${LABELS[props.selectedLabel].color}`;
    }
    return '';
  }

  const handleSelectLabel = (index: any) => {
    console.log(props.workoutId)
    if (!props.workoutId) {
      props.selectLabel(index)
    }
  }
  const handleFocus = (event: any) => event.target.select();
  return (
    <React.Fragment>
      <div className="ModalOverlay" />
      <div className="Modal">
        <div className="ModalTop">
          <div className="label-wrap">
            {
              LABELS.map((i, j) => {
                return (
                  <span key={j} onClick={() => { handleSelectLabel(j) }}
                    className={`label ${props.workoutId ? 'inactive' : ''} ${i.color} ${props.selectedLabel === j ? 'selected' : ''}`}>{i.name}</span>
                )
              })
            }
          </div>
        </div>
        <div className="ModalHead">
          <Input value={props.workout.name} disabled={props.workoutId ? true : false} onChange={(e: any) => onChangeHandle('name', e, LENGTH_RESTRICT)}>
            <button onClick={() => props.removeName()}>
              <Cancel width="16px" />
            </button>
          </Input>
          {/* <IconBtn style={{ marginLeft: '16px' }} icon={<Check width='16px' fill='#F76304' />} /> */}
        </div>
        <div className="ModalBody">
          <div className="row">
            <span style={{ position: 'absolute', left: '16px', fontSize: '10pt' }}>Weight</span>
            <Input type="number" value={props.workout.weight} onFocus={handleFocus} onChange={(e: any) => onChangeHandle('weight', e, NUMBER_ONLY)} style={{ width: '80px' }} />
            <IconBtn icon={<ArrowDown />} onClick={() => props.controlData({ name: 'weight', action: 'decrease' })} style={{ marginLeft: '8px' }} />
            <IconBtn icon={<ArrowUp />} onClick={() => props.controlData({ name: 'weight', action: 'increase' })} style={{ marginLeft: '8px' }} />
          </div>
          <div className="row">
            <button onClick={() => props.controlData({ name: 'weight', action: 'increase', unit: 2.5 })} style={{ padding: '8px 12px', background: '#353535', borderRadius: '5px', color: 'white' }}>2.5kg</button>
            <button onClick={() => props.controlData({ name: 'weight', action: 'increase', unit: 5 })} style={{ padding: '8px 12px', background: '#353535', borderRadius: '5px', color: 'white', marginLeft: '8px' }}>5kg</button>
            <button onClick={() => props.controlData({ name: 'weight', action: 'increase', unit: 10 })} style={{ padding: '8px 12px', background: '#353535', borderRadius: '5px', color: 'white', marginLeft: '8px' }}>10kg</button>
          </div>
          <div className="row">
            <span style={{ position: 'absolute', left: '16px', fontSize: '10pt' }}>Reps</span>
            <Input type="number" value={props.workout.reps} onFocus={handleFocus} onChange={(e: any) => onChangeHandle('reps', e, INTEGER_ONLY)} style={{ width: '80px' }} />
            <IconBtn icon={<ArrowDown />} onClick={() => props.controlData({ name: 'reps', action: 'decrease' })} style={{ marginLeft: '8px' }} />
            <IconBtn icon={<ArrowUp />} onClick={() => props.controlData({ name: 'reps', action: 'increase' })} style={{ marginLeft: '8px' }} />
          </div>
        </div>
        <div className="ModalFoot">
          <button onClick={props.closeModal}>Cancel</button>
          <button onClick={() => { updateData() }} className={isActive()} >Confirm</button>
        </div>
      </div>
    </React.Fragment>

  )
}

export default WorkoutModal;