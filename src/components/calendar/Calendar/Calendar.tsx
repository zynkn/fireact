import React from 'react';
import moment, { Moment as MomentTypes } from "moment";

import './Calendar.scss';
import IconBtn from 'components/common/IconBtn';
import { ArrowLeft, ArrowRight, Add } from 'components/common/Icons'


const colorSet: { [key: string]: any } = {
  'aerobic': 'yellow',
  'chest': 'skyblue',
  'biceps': 'purple',
  'triceps': 'blue',
  'shoulder': 'orange',
  'lower': 'brown',
  'back': 'green',
  'abdominal': 'red',
}


interface Props {
  selectedDate: moment.Moment
  selectDate: Function
  openModal: any
  labels: { [key: string]: Array<string> }
}

const Calendar: React.FC<Props> = (props) => {

  return (
    <div className="Calendar">
      <CalendarHead selectedDate={props.selectedDate} selectDate={props.selectDate} />
      <CalendarBody selectedDate={props.selectedDate} selectDate={props.selectDate} labels={props.labels} />
      <div style={{ padding: '0 16px', marginTop: '16px' }}>
        <IconBtn className="lg theme-color" icon={<Add fill='#fff' width="24px" />} style={{ borderRadius: '5px' }} onClick={() => props.openModal()} />
      </div>
    </div>
  )
}

export default Calendar;

interface headProps {
  selectedDate: moment.Moment
  selectDate: Function
}
const CalendarHead: React.FC<headProps> = (props) => {
  return (
    <div className="CalendarHead">
      <IconBtn icon={<ArrowLeft />} onClick={() => props.selectDate(props.selectedDate.clone().subtract(1, 'month'))} />
      <span className="title" onClick={() => props.selectDate(moment())}>{props.selectedDate.format('MMMM YYYY')}</span>
      <IconBtn icon={<ArrowRight />} onClick={() => props.selectDate(props.selectedDate.clone().add(1, 'month'))} />
    </div>
  )
}


interface bodyProps {
  selectedDate: moment.Moment
  selectDate: Function
  labels: { [key: string]: Array<string> }
}

const CalendarBody: React.FC<bodyProps> = (props) => {
  const generateCalendar = () => {
    const today = moment();

    const startWeek = props.selectedDate.clone().startOf('month').week();
    const endWeek = props.selectedDate.clone().endOf('month').week() === 1 ? 53 : props.selectedDate.clone().endOf('month').week();
    let calendar = []
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="row" key={week}>
          {
            Array(7).fill(0).map((n, i) => {
              let current = props.selectedDate.clone().week(week).startOf('week').add(n + i, 'day')
              let isSelected = props.selectedDate.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
              let isToday = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'today' : '';
              let isExtra = current.format('MM') === props.selectedDate.format('MM') ? '' : 'extra';
              let labels = props.labels[current.format('YYYY-MM-DD')] || [];
              return (
                <div className={`box ${isSelected} ${isToday} ${isExtra} `} key={i} onClick={() => props.selectDate(current)}>
                  <div className="label-box">
                    {labels.map((i, j) => <span key={j} className={`label ${colorSet[i]}`} />)}
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