import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactTransitionGroup from 'react-addons-css-transition-group'; // ES6
import moment from 'moment';
import './common.scss';
import IconBtn from 'components/common/IconBtn';
import Input from 'components/common/Input';
import { ArrowDown, ArrowUp, Cancel } from 'components/common/Icons';
import { LABELS } from 'CONSTANTS';



const Modal: React.FC<any> = React.memo((props: any) => {
  console.log(props);
  const [weight, setWeight]: any = useState(0);
  const [reps, setReps]: any = useState(0);
  const [name, setName]: any = useState('');
  const [label, setLabel]: any = useState(0);
  const [timestamp, setTimestamp]: any = useState(props.timestamp || -1);
  useEffect(() => {
    if (timestamp !== props.timestamp) {
      setTimestamp(props.timestamp);
      setWeight(props.data.sets[props.timestamp].weight || 0);
      setReps(props.data.sets[props.timestamp].reps || 0);
      setLabel(props.data.label);
      setName(props.data.name);
    }
  }, [props])

  if (!props.isShowing) {
    return <ReactTransitionGroup
      transitionName={'anim'}
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}
    ></ReactTransitionGroup>
  }
  const activeColor = () => {
    if (props.isLabelClicked && name !== '') {
      return LABELS[label].color;
    }
    if (name !== '' && weight >= 0 && weight !== '' && reps > 0 && reps !== '') {
      return LABELS[label].color;
    }
    return ''
  }
  const isActive = () => {
    if (props.isLabelClicked === false) {
      return false;
    }
    else {
      return true;
    }
  }
  const handleConfirm = () => {
    if (name !== '' && weight >= 0 && reps > 0) {
      if (props.isLabelClicked) {
        props.updateData({ isLabelClicked: true, workoutId: props.id, weight, reps, name, index: props.timestamp, type: LABELS[label].type })
      } else if (props.isTagClicked) {
        props.updateData({ workoutId: props.id, weight, reps, name, index: props.timestamp, type: LABELS[label].type })
        setTimestamp(-1);
      } else {
        props.addData({ workoutId: props.id || moment().unix(), name, weight, reps, label })
      }
      if (timestamp === -1) {
        setWeight(0);
        setReps(0);
        setName('');
      }
      props.hide();
    }
  }
  const handleRemove = () => {
    props.removeData({
      workoutId: props.id,
      timestamp: props.timestamp,
    })
    setTimestamp(-1);
    props.hide();
  }
  const handleHide = () => {
    setTimestamp(-1);
    setWeight(0);
    setReps(0);
    setName(props.data.name || '');
    setLabel(props.data.label || 0);
    props.hide();
  }

  // 네이밍 변경해라 handleClickLabel
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
          <Input className={activeColor()} disabled={!isActive()} value={name} onChange={(e: any) => setName(e.target.value)}>
            <button onClick={() => setName('')}>
              <Cancel width="16px" />
            </button>
          </Input>
        </div>
        {
          !props.isLabelClicked &&
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
        }

        <div className="ModalFoot">
          <button onClick={handleHide} style={{ background: '#f9f9f9', color: '#bebebe' }}>Cancel</button>
          {
            (props.isTagClicked) && <button onClick={handleRemove}>Delete</button>
          }
          <button onClick={handleConfirm} className={activeColor()} >{'Confirm'}</button>
        </div>
      </div>
    </ReactTransitionGroup>
  )
})

const WorkoutAddModal: React.FC<any> = (props: any) => {
  return ReactDOM.createPortal(
    <>
      <Modal {...props} />
    </>, document.getElementById("modal") as Element
  )
}

export default WorkoutAddModal;