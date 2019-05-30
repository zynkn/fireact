import React, { useState } from 'react';
import './common.scss';
import IconBtn from 'components/common/IconBtn';
import Input from 'components/common/Input';
import moment from "moment";
import { ArrowDown, ArrowUp, Check, Cancel } from 'components/common/Icons';
import { LABELS } from 'CONSTANTS';


const WorkoutModal = (props: any) => {
  console.log(props);
  const [label, setLabel] = useState(props.label);
  const [name, setName] = useState(props.name);
  const [weight, setWeight] = useState(props.weight);
  const [reps, setReps] = useState(props.reps);

  const activeColor = () => {
    if (name !== '' && weight >= 0 && reps > 0) {
      return LABELS[label].color;
    }
  }
  const isActive = () => {
    if (props.id) {
      return false;
    } else {
      return true;
    }
  }


  const onHandleConfirm = () => {
    if (name !== '' && weight >= 0 && reps > 0) {

      if (props.isUpdate) {
        props.updateData({ id: props.id, weight, reps, index: props.index })
      } else {
        props.addData({ name, weight, reps, label })
      }

      props.closeModal();
    }
  }

  const onHandleLabel = (idx: number) => {
    if (isActive()) {
      setLabel(idx)
    }
  }

  const handleFocus = (event: any) => event.target.select();
  return (
    <React.Fragment>
      <div className="ModalOverlay" />
      <div className="Modal">
        <div className={`ModalTop ${isActive() ? '' : 'inactive'}`}>
          <div className="label-wrap">
            {
              LABELS.map((i, j) => {
                return (
                  <span key={j} onClick={() => { onHandleLabel(j) }}
                    className={`label ${i.color} ${label === j ? 'selected' : ''}`}>{i.name}</span>
                )
              })
            }
          </div>
        </div>
        <div className={`ModalHead ${isActive() ? '' : 'inactive'}`}>
          <Input disabled={!isActive()} value={name} onChange={(e: any) => setName(e.target.value)}>
            <button onClick={() => setName('')}>
              <Cancel width="16px" />
            </button>
          </Input>
        </div>
        <div className="ModalBody">
          <div className="row">
            <span style={{ position: 'absolute', left: '24px', fontSize: '10pt' }}>Weight</span>
            <Input type="number" value={weight} onFocus={handleFocus} onChange={(e: any) => setWeight(e.target.value)} style={{ width: '80px' }} />
            <IconBtn icon={<ArrowDown />} onClick={() => setWeight(weight - 1)} style={{ marginLeft: '8px' }} />
            <IconBtn icon={<ArrowUp />} onClick={() => setWeight(weight + 1)} style={{ marginLeft: '8px' }} />
          </div>
          <div className="row">
            <button onClick={() => setWeight(weight + 2.5)} style={{ padding: '8px 12px', background: '#353535', borderRadius: '5px', color: 'white' }}>2.5kg</button>
            <button onClick={() => setWeight(weight + 5)} style={{ padding: '8px 12px', background: '#353535', borderRadius: '5px', color: 'white', marginLeft: '8px' }}>5kg</button>
            <button onClick={() => setWeight(weight + 10)} style={{ padding: '8px 12px', background: '#353535', borderRadius: '5px', color: 'white', marginLeft: '8px' }}>10kg</button>
          </div>
          <div className="row">
            <span style={{ position: 'absolute', left: '24px', fontSize: '10pt' }}>Reps</span>
            <Input type="number" value={reps} onFocus={handleFocus} onChange={(e: any) => setReps(e.target.value)} style={{ width: '80px' }} />
            <IconBtn icon={<ArrowDown />} onClick={() => setReps(reps - 1)} style={{ marginLeft: '8px' }} />
            <IconBtn icon={<ArrowUp />} onClick={() => setReps(reps + 1)} style={{ marginLeft: '8px' }} />
          </div>
        </div>
        <div className="ModalFoot">
          <button onClick={props.closeModal} style={{ background: '#f9f9f9', color: '#bebebe' }}>Cancel</button>
          {/* <button style={{ background: '#f9f9f9', color: '#bebebe' }}>Delete</button> */}
          <button onClick={onHandleConfirm} className={activeColor()} >Confirm</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default WorkoutModal;