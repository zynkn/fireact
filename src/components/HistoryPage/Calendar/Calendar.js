import React, { Component } from 'react';
import moment from 'moment';
import styles from './Calendar.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_left } from 'react-icons-kit/md/ic_keyboard_arrow_left';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';

const cx = classNames.bind(styles);

const MONTH = ["JANUARY", "FABRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
class Calendar extends Component {
  constructor(props) {
    super(props);
    let time = moment();
    this.state = {
      selected: moment().format('D'),
      date: {
        time: moment(),
        month: moment().format('M'),
        year: moment().format('YYYY'),
      }
    }
  }

  previous = () => {
    const { time } = this.state.date;
    this.setState({
      date: {
        time: time.subtract(1, 'months'),
        month: time.format('M'),
        year: time.format('YYYY')
      }
    })
  }
  next = () => {
    const { time } = this.state.date;
    this.setState({
      date: {
        time: time.add(1, 'months'),
        month: time.format('M'),
        year: time.format('YYYY')
      }
    });
  }

  generate = () => {
    const { state } = this;
    const { date } = this.state;
    let start = date.time.startOf('month').day();
    let last = date.time.endOf('month').date();

    let prevTime = moment(date.time).subtract(1, 'months');
    let prevLast = prevTime.endOf('month').format('D');
    let prevMonth = prevTime.format('M');
    let prevYear = prevTime.format('YYYY');
    let prevStr = prevYear + "-" + prevMonth;

    let nextTime = moment(date.time).add(1, 'months');
    let nextMonth = nextTime.format('M');
    let nextYear = nextTime.format('YYYY');
    let nextStr = nextYear + "-" + nextMonth;

    let cols = [];
    let rows = [];
    let count = 1;
    let SEVEN = 0;
    for (let i = start - 1; i >= 0; i--) {
      rows.push(
        <td key={prevLast - i} data-date={prevStr + "-" + (prevLast - i)} className={cx('past')} >
          <span>{prevLast - i}</span>
        </td>
      )
    }
    for (let i = 1; i <= 7 - start; i++) {
      rows.push(
        <td key={i} data-date={date.year + "-" + date.month + "-" + i} className={state.selected == i ? cx('selected') : ''}>
          <span>{i}</span>
        </td>
      )
      count = i;
    }
    cols.push(<tr >{rows}</tr>);
    rows = [];

    for (let i = count + 1; i <= last; i++) {
      SEVEN++;
      rows.push(
        <td key={i} data-date={date.year + "-" + date.month + "-" + i} className={state.selected == i ? cx('selected') : ''}>
          <span>{i}</span>
        </td>
      )
      if (SEVEN % 7 == 0) {
        cols.push(<tr >{rows}</tr>);
        rows = [];
      }
    }
    if (rows.length % 7 != 0) {
      let len = 7 - rows.length;
      for (let i = 1; i <= len; i++) {
        rows.push(
          <td key={nextStr + "-" + i} data-date={nextStr + "-" + i} className={cx('past')}><span>{i}</span></td>
        )
      }
    }
    cols.push(<tr >{rows}</tr>)
    return cols;
  }
  dateHandler = (e) => {
    e.preventDefault()
    e.stopPropagation();
    let date = e.target.closest("td").dataset.date.split("-");
    this.setState({
      selected: e.target.innerText,
      date: {
        time: moment(e.target.closest("td").dataset.date),
        year: date[0],
        month: date[1],
      }
    })
  }
  datePress = (e) => {
    this.pressTimer = setTimeout(() => {
      alert('2sec')
    }, 2000)
    console.log(e.target);
  }
  dateRelease = (e) => {
    clearTimeout(this.pressTimer);
    console.log(e.target);
  }

  render() {
    const { month, year } = this.state.date;
    console.log(this.state.date);
    return (
      <div className={cx('calendar-wrap')}>
        <div className={cx('header')}>
          <div className={cx('btn-wrap')} onClick={this.previous}>
            <Icon icon={ic_keyboard_arrow_left} size={24} style={{ color: '#4b4b4b' }} />
          </div>

          <span className={cx('title')}>{MONTH[month - 1] + " " + year}</span>
          <div className={cx('btn-wrap')} onClick={this.next} >
            <Icon icon={ic_keyboard_arrow_right} size={24} style={{ color: '#4b4b4b' }} />
          </div>

        </div>
        <table className={cx('calendar')}>
          <thead>
            <tr>
              <th>S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
            </tr>
          </thead>
          <tbody onClick={this.dateHandler} onTouchStart={this.datePress} onTouchEnd={this.dateRelease}>
            {this.generate()}
          </tbody>
        </table>
      </div>
    );
  }
}


export default Calendar;