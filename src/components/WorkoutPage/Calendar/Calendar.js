import React, { Component } from 'react';
import moment from 'moment';
import styles from './Calendar.scss';
import classNames from 'classnames/bind';

import ColorPicker from 'components/WorkoutPage/ColorPicker';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_left } from 'react-icons-kit/md/ic_keyboard_arrow_left';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';

const cx = classNames.bind(styles);

const MONTH = ["JANUARY", "FABRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
class Calendar extends Component {
  constructor(props) {
    super(props);
    this.props.get({ date: moment(new Date()).format('YYYYMMDD') });
    this.state = {
      selected: moment(new Date()).format('D'),
      date: {
        time: moment(new Date()),
        month: moment(new Date()).format('M'),
        year: moment(new Date()).format('YYYY'),
      },
      colorpicker: {
        visible: false,
        x: 0,
        y: 0,
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
    this.props.get({ date: this.state.date.time.format('YYYYMMDD') });
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
    this.props.get({ date: this.state.date.time.format('YYYYMMDD') });
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
    let prevStr = prevYear + "-" + prevMonth.padStart(2, '0');

    let nextTime = moment(date.time).add(1, 'months');
    let nextMonth = nextTime.format('M');
    let nextYear = nextTime.format('YYYY');
    let nextStr = nextYear + "-" + nextMonth.padStart(2, '0');

    let cols = [];
    let rows = [];
    let count = 1;
    let SEVEN = 0;
    let trCnt = 0;
    for (let i = start - 1; i >= 0; i--) {
      rows.push(
        <td key={prevLast - i} data-date={prevStr + "-" + (prevLast - i)} className={cx('past')} >
          <span>{prevLast - i}</span>
        </td>
      )
    }
    for (let i = 1; i <= 7 - start; i++) {
      rows.push(
        <td key={i} data-date={date.year + "-" + date.month.padStart(2, '0') + "-" + i.toString().padStart(2, '0')} className={parseInt(state.selected, 10) === i ? cx('selected') : ''}>
          <span>{i}</span>
        </td>
      )
      count = i;
    }
    cols.push(<tr key={trCnt++} >{rows}</tr>);
    rows = [];

    for (let i = count + 1; i <= last; i++) {
      SEVEN++;
      rows.push(
        <td key={i} data-date={date.year + "-" + date.month.padStart(2, '0') + "-" + i.toString().padStart(2, '0')} className={parseInt(state.selected, 10) === i ? cx('selected') : ''}>
          <span>{i}</span>
        </td>
      )
      if (SEVEN % 7 === 0) {
        cols.push(<tr key={trCnt++}>{rows}</tr>);
        rows = [];
      }
    }
    if (rows.length % 7 !== 0) {
      let len = 7 - rows.length;
      for (let i = 1; i <= len; i++) {
        rows.push(
          <td key={nextStr + "-" + i} data-date={nextStr + "-" + i.toString().padStart(2, '0')} className={cx('past')}><span>{i}</span></td>
        )
      }
    }
    cols.push(<tr key={trCnt++}>{rows}</tr>)
    return cols;
  }
  dateHandler = (e) => {
    const { props, state } = this;
    if (!state.colorpicker.visible) {
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
      });
      props.get({ date: date.join('') });
    }

  }

  datePress = (e) => {
    let elTarget = e.target.closest("td");
    this.pressTimer = setTimeout(() => {
      elTarget.classList.add(cx('color'));
      this.setState({
        colorpicker: {
          visible: true,
          x: elTarget.offsetLeft,
          y: elTarget.offsetTop
        }
      })
    }, 1000)
  }

  dateRelease = (e) => {
    clearTimeout(this.pressTimer);
  }

  pickerClose = () => {
    clearTimeout(this.pressTimer);
    document.querySelector(`.${cx('color')}`).classList.remove(cx('color'));
    this.setState({
      colorpicker: {
        visible: false,
        x: 0,
      }
    })
  }

  bgClose = () => {
    document.querySelector('#bg').classList.remove(cx('on'));
    document.querySelector(`.${cx('color')}`).classList.remove(cx('color'));
    document.querySelector('#colorpicker').parentNode.removeChild(document.querySelector('#colorpicker'))
  }

  render() {
    const { props, state } = this;
    const { month, year } = state.date;
    return (
      <div className={cx('calendar-wrap')}>
        <ColorPicker data={this.state.colorpicker} close={this.pickerClose} />
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