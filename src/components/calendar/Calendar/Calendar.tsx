import React from 'react';
import moment, { Moment as MomentTypes } from "moment";

import './Calendar.scss';
import IconBtn from 'components/common/IconBtn';
import ARROW_LEFT from 'assets/svg/icon_arrow_left.svg';
import ARROW_RIGHT from 'assets/svg/icon_arrow_right.svg';



interface Props {
  date: MomentTypes
  changeMonth: Function
  selectDate: Function
  labels: { [key: string]: Array<string> }
}

const Calendar: React.FC<Props> = (props) => {

  return (
    <div className="Calendar">
      <CalendarHead title={props.date.format('MMMM YYYY')} changeMonth={props.changeMonth} />
      <CalendarBody date={props.date} selectDate={props.selectDate} labels={props.labels} />
      <div style={{ padding: '0 16px', marginTop: '16px' }}>
        <IconBtn className="lg theme-color" name="ADD" style={{ borderRadius: '5px' }} />
      </div>
    </div>
  )
}

export default Calendar;

interface headProps {
  title: string
  changeMonth: Function
}
const CalendarHead: React.FC<headProps> = (props) => {
  return (
    <div className="CalendarHead">
      <IconBtn icon={ARROW_LEFT} onClick={() => props.changeMonth('previous')} />
      <span className="title" onClick={() => props.changeMonth()}>{props.title}</span>
      <IconBtn icon={ARROW_RIGHT} onClick={() => props.changeMonth('next')} />
    </div>
  )
}


interface bodyProps {
  date: moment.Moment
  selectDate: Function
  labels: { [key: string]: Array<string> }
}

const CalendarBody: React.FC<bodyProps> = (props) => {
  const generateCalendar = () => {
    const today = moment();

    const startWeek = props.date.clone().startOf('month').week();
    const endWeek = props.date.clone().endOf('month').week() === 1 ? 53 : props.date.clone().endOf('month').week();
    let calendar = []
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="row" key={week}>
          {
            Array(7).fill(0).map((n, i) => {
              let current = props.date.clone().week(week).startOf('week').add(n + i, 'day')
              let isSelected = props.date.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
              let isToday = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'today' : '';
              let isExtra = current.format('MM') === props.date.format('MM') ? '' : 'extra';
              let labels = props.labels[current.format('YYYY-MM-DD')] || [];
              return (
                <div className={`box ${isSelected} ${isToday} ${isExtra} `} key={i} onClick={() => props.selectDate(current)}>
                  <div className="label-box">
                    {labels.map((i, j) => <span key={j} className={`label ${i}`} />)}
                  </div>
                  <span className={`date`}>{current.format('D')}</span>
                </div>
              )
            })
          }
        </div>
      )
    }
    return calendar;
  }
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
      <>
        {generateCalendar()}
      </>
    </div>
  )
}