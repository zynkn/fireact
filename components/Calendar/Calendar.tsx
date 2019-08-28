import React from 'react';
import './Calendar.scss';
import Arrow from '../../components/icons/Arrow';

const Calendar: React.FC<any> = () => {

  return (
    <div className="Calendar">
      <div className="head">
        <button className="btn">
          <Arrow width={24} style={{transform: `rotate(-90deg)`}} />
        </button>
        <span className="month-year">2019년 7월</span>
        <button className="btn">
          <Arrow width={24} style={{transform: `rotate(90deg)`}} />
        </button>
      </div>
      <div className="content">
        <div className="row">
          <div className="box">
            <span className="text">일</span>
          </div>
          <div className="box">
            <span className="text">월</span>
          </div>
          <div className="box">
            <span className="text">화</span>
          </div>
          <div className="box">
            <span className="text">수</span>
          </div>
          <div className="box">
            <span className="text">목</span>
          </div>
          <div className="box">
            <span className="text">금</span>
          </div>
          <div className="box">
            <span className="text">토</span>
          </div>
        </div>

        <div className="row">
          <div className="box --square --gray --used">
            <div className="label-box">
              <span className="label --triceps" />
              <span className="label --biceps" />
              <span className="label --back" />
              <span className="label --shoulder" />
              <span className="label --chest" />
              <span className="label --abdominal" />
            </div>
            <span className="circle">
              <span className="text">26</span>
            </span>
          </div>
          <div className="box --square --gray --used">
            <div className="label-box">
              <span className="label --biceps" />
              <span className="label --back" />
              <span className="label --triceps" />
              
            </div>
            <span className="circle">
              <span className="text">27</span>
            </span>
          </div>
          <div className="box --square --gray --used">
          <div className="label-box">
              <span className="label --triceps" />
              <span className="label --chest" />
              <span className="label --abdominal" />
            </div>
            <span className="circle">
            <span className="text">28</span>
            </span>
          </div>
          <div className="box --square --gray">
            <span className="circle">
            <span className="text">29</span>
            </span>
          </div>
          <div className="box --square --gray">
            <span className="circle">
            <span className="text">30</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">1</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">2</span>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="box --square">
            <div className="label-box">
            </div>
            <span className="circle">
              <span className="text">3</span>
            </span>
          </div>
          <div className="box --square">
            <div className="label-box">
            </div>
            <span className="circle">
              <span className="text">4</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">5</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">6</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">7</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">8</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">9</span>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="box --square">
            <div className="label-box">
            </div>
            <span className="circle">
              <span className="text">10</span>
            </span>
          </div>
          <div className="box --square">
            <div className="label-box">
            </div>
            <span className="circle">
              <span className="text">11</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">12</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">13</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">14</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">15</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">16</span>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="box --square">
            <div className="label-box">
            </div>
            <span className="circle">
              <span className="text">17</span>
            </span>
          </div>
          <div className="box --square">
            <div className="label-box">
            </div>
            <span className="circle">
              <span className="text">18</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">19</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">20</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">21</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">22</span>
            </span>
          </div>
          <div className="box --square">
            <span className="circle">
            <span className="text">23</span>
            </span>
          </div>
        </div>
        
      </div>
    </div>
  )
};

export default Calendar;