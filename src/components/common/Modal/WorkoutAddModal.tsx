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
  const renderCount = useRef(0);
  console.log('<WorkoutAddModal />', ++renderCount.current);
  console.log(props);
  const [weight, setWeight]: any = useState(0);
  const [reps, setReps]: any = useState(0);
  const [name, setName]: any = useState('');
  const [label, setLabel]: any = useState(0);
  const [idx, setIdx]: any = useState(props.idx || -1);
  useEffect(() => {
    if (idx !== props.idx) {
      setIdx(props.idx);
      setWeight(props.data.sets[props.idx].weight || 0);
      setReps(props.data.sets[props.idx].reps || 0);
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
    //console.log(!props.isLabelClicked)
    if (props.isLabelClicked === false) {
      return false;
    }
    // if (props.id && props.isLabelClicked) {
    //   return false;
    // } 
    else {
      return true;
    }
  }
  const handleConfirm = () => {
    if (name !== '' && weight >= 0 && reps > 0) {
      if (props.isLabelClicked) {
        props.updateData({ uid: props.id, name, type: LABELS[label].type })
      } else if (props.isTagClicked) {
        props.updateData({ uid: props.id, weight, reps, index: props.idx })
        setIdx(-1);
      } else {
        props.addData({ uid: props.id || moment().unix(), name, weight, reps, label })
      }
      if (idx === -1) {
        setWeight(0);
        setReps(0);
        setName('');
      }
      props.hide();
    }
  }
  const handleRemove = () => {
    props.removeData({
      id: props.id,
      index: props.idx,
    })
    setIdx(-1);
    props.hide();
  }
  const handleHide = () => {
    setIdx(-1);
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
      <Modal {...props} hid={props.hide} />
    </>, document.getElementById("modal") as Element
  )
}

export default WorkoutAddModal;