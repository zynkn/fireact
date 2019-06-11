import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactTransitionGroup from 'react-addons-css-transition-group'; // ES6
import moment from 'moment';
import './common.scss';
import './GenderModal.scss';
import IconBtn from 'components/common/IconBtn';
import Input from 'components/common/Input';
import { ArrowRight, ArrowUp, Cancel } from 'components/common/Icons';
import { LABELS } from 'CONSTANTS';



const Modal: React.FC<any> = React.memo((props: any) => {
  const [gender, setGender] = useState('Male')
  console.log(props);
  return (
    <>
      <div className="ModalOverlay" />
      <div className="Modal GenderModal">
        <div className="ModalHead">
          Gender
        </div>
        <div className="ModalBody">
          <div onClick={() => setGender('Male')} className={`select-tab ${gender === 'Male' ? 'selected' : ''}`}>
            <ArrowRight width="20px" style={{ marginRight: '8px' }} />
            Male
          </div>
          <div onClick={() => setGender('Female')} className={`select-tab ${gender === 'Female' ? 'selected' : ''}`}>
            <ArrowRight width="20px" style={{ marginRight: '8px' }} />
            Female
          </div>
        </div>
        <div className="ModalFoot">
          <button onClick={props.toggle} style={{ background: '#f9f9f9', color: '#bebebe' }}>Cancel</button>

        </div>
      </div>
    </>
  )
})

const GenderModal: React.FC<any> = (props: any) => {
  return ReactDOM.createPortal(
    <>
      <Modal {...props} />
    </>, document.getElementById("modal") as Element
  )
}

export default GenderModal;