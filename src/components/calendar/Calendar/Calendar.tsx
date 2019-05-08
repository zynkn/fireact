import React from 'react';
import './Calendar.scss';
import IconBtn from 'components/common/IconBtn';
import ARROW_LEFT from 'assets/svg/icon_arrow_left.svg';
import ARROW_RIGHT from 'assets/svg/icon_arrow_right.svg';

const Calendar: React.FC = () => {

  return (
    <div className="Calendar">
      <CalendarHead />
      <CalendarBody />
      <div style={{ padding: '0 16px', marginTop: '16px' }}>
        <IconBtn className="lg theme-color" name="ADD" style={{ borderRadius: '5px' }} />
      </div>

    </div>
  )
}

export default Calendar;


const CalendarHead: React.FC = () => {
  return (
    <div className="CalendarHead">
      <IconBtn icon={ARROW_LEFT} />
      <span className="title">April 2019</span>
      <IconBtn icon={ARROW_RIGHT} />
    </div>
  )
}

const CalendarBody: React.FC = () => {
  return (
    <div className="CalendarBody">
      <div className="row">
        <div className="box"><span className="date static">S</span></div>
        <div className="box"><span className="date static">M</span></div>
        <div className="box"><span className="date static">T</span></div>
        <div className="box"><span className="date static">W</span></div>
        <div className="box"><span className="date static">T</span></div>
        <div className="box"><span className="date static">F</span></div>
        <div className="box"><span className="date static">S</span></div>
      </div>
      <div className="row">
        <div className="box extra">
          <div className="label-box">
            <span className="label yellow" />
            <span className="label red" />
          </div>
          <span className="date">24</span>
        </div>
        <div className="box extra">
          <div className="label-box">
            <span className="label blue" />
          </div>
          <span className="date">25</span>
        </div>
        <div className="box extra">
          <div className="label-box">
            <span className="label skyblue" />
            <span className="label purple" />
            <span className="label blue" />
          </div>
          <span className="date">26</span>
        </div>
        <div className="box extra">
          <div className="label-box">
            <span className="label green" />
            <span className="label yellow" />
            <span className="label red" />
          </div>
          <span className="date">27</span>
        </div>
        <div className="box extra">
          <span className="date">28</span>
        </div>
        <div className="box selected">
          <div className="label-box">
            <span className="label skyblue" />
            <span className="label purple" />
            <span className="label blue" />
          </div>
          <span className="date">1</span>
        </div>
        <div className="box today">
          <div className="label-box">
            <span className="label blue" />
          </div>
          <span className="date">2</span>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <div className="label-box">
            <span className="label yellow" />
            <span className="label red" />
          </div>
          <span className="date">3</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label blue" />
          </div>
          <span className="date">4</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label skyblue" />
            <span className="label purple" />
            <span className="label blue" />
          </div>
          <span className="date">5</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label green" />
            <span className="label yellow" />
            <span className="label red" />
          </div>
          <span className="date">6</span>
        </div>
        <div className="box">
          <span className="date">7</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label skyblue" />
            <span className="label purple" />
            <span className="label blue" />
          </div>
          <span className="date">8</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label blue" />
          </div>
          <span className="date">9</span>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <div className="label-box">
            <span className="label yellow" />
            <span className="label red" />
          </div>
          <span className="date">10</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label blue" />
          </div>
          <span className="date">11</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label skyblue" />
            <span className="label purple" />
            <span className="label blue" />
          </div>
          <span className="date">12</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label green" />
            <span className="label yellow" />
            <span className="label red" />
          </div>
          <span className="date">13</span>
        </div>
        <div className="box">
          <span className="date">14</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label skyblue" />
            <span className="label purple" />
            <span className="label blue" />
          </div>
          <span className="date">15</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label blue" />
          </div>
          <span className="date">16</span>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <div className="label-box">
            <span className="label yellow" />
            <span className="label red" />
          </div>
          <span className="date">17</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label blue" />
          </div>
          <span className="date">18</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label skyblue" />
            <span className="label purple" />
            <span className="label blue" />
          </div>
          <span className="date">19</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label green" />
            <span className="label yellow" />
            <span className="label red" />
          </div>
          <span className="date">20</span>
        </div>
        <div className="box">
          <span className="date">21</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label skyblue" />
            <span className="label purple" />
            <span className="label blue" />
          </div>
          <span className="date">22</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label blue" />
          </div>
          <span className="date">23</span>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <div className="label-box">
            <span className="label yellow" />
            <span className="label red" />
          </div>
          <span className="date">24</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label blue" />
          </div>
          <span className="date">25</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label skyblue" />
            <span className="label purple" />
            <span className="label blue" />
          </div>
          <span className="date">26</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label green" />
            <span className="label yellow" />
            <span className="label red" />
          </div>
          <span className="date">27</span>
        </div>
        <div className="box">
          <span className="date">28</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label skyblue" />
            <span className="label purple" />
            <span className="label blue" />
          </div>
          <span className="date">29</span>
        </div>
        <div className="box">
          <div className="label-box">
            <span className="label blue" />
          </div>
          <span className="date">30</span>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <div className="label-box">
            <span className="label yellow" />
            <span className="label red" />
          </div>
          <span className="date">31</span>
        </div>
        <div className="box extra">
          <div className="label-box">
            <span className="label blue" />
          </div>
          <span className="date ">1</span>
        </div>
        <div className="box extra">
          <div className="label-box">
            <span className="label skyblue" />
            <span className="label purple" />
            <span className="label blue" />
          </div>
          <span className="date ">2</span>
        </div>
        <div className="box extra">
          <div className="label-box">
            <span className="label green" />
            <span className="label yellow" />
            <span className="label red" />
          </div>
          <span className="date ">3</span>
        </div>
        <div className="box extra">
          <span className="date ">4</span>
        </div>
        <div className="box extra">
          <div className="label-box">
            <span className="label skyblue" />
            <span className="label purple" />
            <span className="label blue" />
          </div>
          <span className="date ">5</span>
        </div>
        <div className="box extra">
          <div className="label-box">
            <span className="label blue" />
          </div>
          <span className="date ">6</span>
        </div>
      </div>





    </div>
  )
}