import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactTransitionGroup from 'react-addons-css-transition-group'; // ES6
import moment from 'moment';
import './common.scss';
import IconBtn from 'components/common/IconBtn';
import Input from 'components/common/Input';
import { ArrowDown, ArrowUp, Check, Cancel } from 'components/common/Icons';
import { LABELS } from 'CONSTANTS';
import { removeProperties } from '@babel/types';


const Modal: React.FC<any> = (props: any) => {
  const renderCount = useRef(0);
  console.log('<TestModal /> RENDER!', ++renderCount.current);
  const [label, setLabel] = useState(props.label || 0);
  const [name, setName]: any = useState(props.name || '');
  const [weight, setWeight]: any = useState(props.weight || 0);
  const [reps, setReps]: any = useState(props.reps || 0);
  const [idx, setIdx]: any = useState(props.idx || -2);
  console.log(label, props.label);
  useEffect(() => {
    if (props.idx !== idx || props.label !== label || props.weight !== weight || props.reps !== reps) {
      setName(props.name);
      setIdx(props.idx);
      setWeight(props.weight);
      setReps(props.reps);
      setLabel(props.label);
    }
  }, [props.idx, props.weight, props.reps, props.label]);

  if (!props.isShowing) {
    return <ReactTransitionGroup
      transitionName={'anim'}
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}
    ></ReactTransitionGroup>
  }
  const activeColor = () => {
    if (name !== '' && weight >= 0 && weight !== '' && reps > 0 && reps !== '') {
      return LABELS[label].color;
    }
    return ''
  }
  const isActive = () => {
    if (props.id) {
      return false;
    } else {
      return true;
    }
  }
  const onHandleConfirm = () => {
    console.log(idx);
    if (name !== '' && weight >= 0 && reps > 0) {
      if (props.idx !== -1) {
        props.updateData({ uid: props.id, weight, reps, index: props.idx })
      } else {
        props.addData({ uid: props.id || moment().unix(), name, weight, reps, label })
      }
      setIdx(-2);
      props.hide();
    }
  }
  const handleRemove = () => {
    props.removeData({
      id: props.id,
      index: props.idx,
    })
    props.hide();
  }
  const handleHide = () => {
    setIdx(-2);
    props.hide();
  }
  const onHandleLabel = (idx: number) => {
    if (isActive()) {
      setLabel(idx)
    }
  }

  const handleFocus = (event: any) => event.target.select();


  return (
    <ReactTransitionGroup
      transitionName={'anim'}
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}
    >
      <div className="ModalOverlay" />
      <div className="Modal">
        <div className={`ModalTop ${isActive() ? '' : 'inactive'}`}>
          <div className="label-wrap">
            {
              LABELS.map((i, j) => <span key={j} onClick={() => { onHandleLabel(j) }} className={`label ${i.color} ${(label) === j ? 'selected' : ''}`}>{i.name}</span>)
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
            <Input type="number" value={weight} onFocus={handleFocus} onChange={(e: any) => setWeight(parseInt(e.target.value) || '')} style={{ width: '80px' }} />
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
            <Input type="number" value={reps} onFocus={handleFocus} onChange={(e: any) => setReps(parseInt(e.target.value) || '')} style={{ width: '80px' }} />
            <IconBtn icon={<ArrowDown />} onClick={() => setReps(reps - 1)} style={{ marginLeft: '8px' }} />
            <IconBtn icon={<ArrowUp />} onClick={() => setReps(reps + 1)} style={{ marginLeft: '8px' }} />
          </div>
        </div>
        <div className="ModalFoot">
          <button onClick={handleHide} style={{ background: '#f9f9f9', color: '#bebebe' }}>Cancel</button>
          {
            (props.idx !== -1) && <button onClick={handleRemove}>Delete</button>
          }
          <button onClick={onHandleConfirm} className={activeColor()} >{'Confirm'}</button>
        </div>
      </div>
    </ReactTransitionGroup>
  )
}

const TestModal: React.FC<any> = (props: any) => {
  return ReactDOM.createPortal(
    <>
      <Modal {...props} hid={props.hide} />
    </>, document.getElementById("modal") as Element
  )
}

export default TestModal;