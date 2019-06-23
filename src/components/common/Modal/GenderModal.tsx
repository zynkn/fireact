import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './common.scss';
import './GenderModal.scss';
import { ArrowRight } from 'components/common/Icons';


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