import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactTransitionGroup from 'react-addons-css-transition-group'; // ES6
import './common.scss';
import Input from 'components/common/Input';
import { Cancel } from 'components/common/Icons';
import { LABELS } from 'CONSTANTS';


const Modal: React.FC<any> = React.memo((props: any) => {
  const renderCount = useRef(0);

  //console.log('<EditModal /> RENDER!', ++renderCount.current);
  const [label, setLabel] = useState(props.label || 0);
  const [name, setName]: any = useState(props.name || '');
  const [idx, setIdx]: any = useState(props.idx || -1);

  useEffect(() => {
    //console.log('전달 받은 idx =>', props.idx, '현재 idx', idx);
    if (props.idx !== idx) {
      setName(props.name);
      setIdx(props.idx);
    }
  }, [props.idx]);

  if (!props.isShowing) {
    return <ReactTransitionGroup
      transitionName={'anim'}
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}
    ></ReactTransitionGroup>
  }
  const isActive = () => {
    if (props.id) {
      return false;
    } else {
      return true;
    }
  }
  const onHandleConfirm = () => {
    if (name !== '') {
      props.updateData({ uid: props.id, name, type: LABELS[label].type })
      setIdx(-1);
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
    setIdx(-1);
    props.hide();
  }
  const onHandleLabel = (idx: number) => {
    setLabel(idx)
  }
  const activeColor = () => {
    if (name !== '') {
      return LABELS[label].color;
    }
    return ''
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
        <div className={`ModalTop`}>
          <div className="label-wrap">
            {
              LABELS.map((i, j) => <span key={j} onClick={() => { onHandleLabel(j) }} className={`label ${i.color} ${(label) === j ? 'selected' : ''}`}>{i.name}</span>)
            }
          </div>
        </div>
        <div className={`ModalHead`}>
          <Input value={name} onChange={(e: any) => setName(e.target.value)}>
            <button onClick={() => setName('')}>
              <Cancel width="16px" />
            </button>
          </Input>
        </div>
        <div className="ModalFoot">
          <button onClick={handleHide} style={{ background: '#f9f9f9', color: '#bebebe' }}>Cancel</button>
          {/* {
            (props.idx !== -1) && <button onClick={handleRemove}>Delete</button>
          } */}
          <button onClick={onHandleConfirm} className={activeColor()} >{'Confirm'}</button>
        </div>
      </div>
    </ReactTransitionGroup>
  )
})

const EditModal: React.FC<any> = (props: any) => {
  return ReactDOM.createPortal(
    <>
      <Modal {...props} hid={props.hide} />
    </>, document.getElementById("modal") as Element
  )
}

export default EditModal;