import React from 'react';
import './Calendar.scss';

const Calendar: React.FC<any> = () => {

  return (
    <div className="Calendar">
      <div className="head">
        <span className="month-year">2019년 7월</span>
      </div>
    </div>
  )
};

export default Calendar;