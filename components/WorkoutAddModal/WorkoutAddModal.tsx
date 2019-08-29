import React from 'react';
import './WorkoutAddModal.scss';
import Plus from '../../components/icons/Plus';

const WorkoutAddModal: React.FC<any> = () => {

  return (
    <>
      <div className="overlay" />
      <div className="WorkoutAddModal">
        <div className="category-tabs">
          <div className="tab chest --checked">
            가슴
          </div>
          <div className="tab">
            등
          </div>
          <div className="tab">
            어깨
          </div>
          <div className="tab">
            삼두
          </div>
          <div className="tab">
            이두
          </div>
          <div className="tab">
            하체
          </div>
          <div className="tab">
            복부
          </div>
        </div>
        <div className="row --gray">
          <div className="input-wrapper">
            <input type="text" />
          </div>
        </div>

        <div className="row">
          <button className="btn"><Plus style={{ height: '16px', fill: 'white' }} /></button>
          <div className="input-wrapper" style={{ flex: '0 0 60%' }}>
            <input type="text" />
          </div>

          <button className="btn"><Plus style={{ height: '16px', fill: 'white' }} /></button>
        </div>
        <div className="row">
          <button className="btn"><Plus style={{ height: '16px', fill: 'white' }} /></button>
          <div className="input-wrapper" style={{ flex: '0 0 60%' }}>
            <input type="text" />
          </div>

          <button className="btn"><Plus style={{ height: '16px', fill: 'white' }} /></button>
        </div>
        <button className="add-btn">
          ADD
        </button>
      </div>
    </>
  )
}

export default WorkoutAddModal;