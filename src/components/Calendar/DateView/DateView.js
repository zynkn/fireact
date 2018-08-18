import React, { Component, Fragment } from 'react';

import { Icon } from 'react-icons-kit'
import { ic_keyboard_arrow_left } from 'react-icons-kit/md/ic_keyboard_arrow_left'
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right'

import styles from './DateView.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
class DateView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      now: new Date(),
    }
  }
  componentWillMount() {
    const { now } = this.state;
    let first = now.getDay() - (now.getDate() % 7 - 1);
    if (first < 0) {
      first = first + 6;
    }
    console.log('first', first);
  }

  previousMonth = () => {
    let today = this.state.now;
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    this.setState({
      now: today,
    })
  }
  nextMonth = () => {
    let today = this.state.now;
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    this.setState({
      now: today,
      month: month[today.getMonth()],
      year: today.getFullYear()
    })
  }


  generate = () => {
    const { now } = this.state;
    let rows = [];
    let first = now.getDay() - (now.getDate() % 7 - 1);
    let month = now.getMonth();
    let year = now.getFullYear();
    let last = null;
    if (first < 0) {
      first = first + 7;
    }
    for (let i = 0; i < first; i++) {
      rows.push('');
    }
    if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
      last = 31;
    } else if (month === 3 || month === 5 || month === 8 || month === 10) {
      last = 30;
    } else {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        last = 29;
      } else {
        last = 28;
      }
    }
    for (let i = 1; i <= last; i++) {
      rows.push(i);
    }
    let rest = (7 - rows.length % 7);
    if (rows.length % 7 === 0) {
      rest = 0;
    }
    for (let i = 0; i < rest; i++) {
      rows.push('');
    }
    let columns = [];
    let ans = [];
    for (let i = 1; i <= rows.length; i++) {
      columns.push(<td key={i} data={rows[i - 1] != '' ? rows[i - 1] : null}>{rows[i - 1]}</td>);
      if (i % 7 === 0 && i !== 0) {
        ans.push(<tr>{columns}</tr>);
        columns = [];
      }
    }

    return ans;
  }


  render() {
    const { now } = this.state;
    let data = this.generate();
    return (
      <section className={cx('calendar')}>
        <div className={cx('header')}>
          <span className={cx('icon-wrap')} onClick={this.previousMonth}>
            <Icon icon={ic_keyboard_arrow_left} size={24} style={{ color: '#bebebe' }} />
          </span>
          <span className={cx('date-display')}>{month[this.state.now.getMonth()]} {this.state.now.getFullYear()}</span>
          <span className={cx('icon-wrap')} onClick={this.nextMonth}>
            <Icon icon={ic_keyboard_arrow_right} size={24} style={{ color: '#bebebe' }} />
          </span>
        </div>
        <div className={cx('content')}>
          <table className={cx('calendar-table')}>
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
            <tbody>
              {data}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}


export default DateView;