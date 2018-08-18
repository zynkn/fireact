import React, { Component } from 'react';

import styles from './ScheduleList.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit'
import { ic_add_box } from 'react-icons-kit/md/ic_add_box'
import { ic_keyboard_arrow_up } from 'react-icons-kit/md/ic_keyboard_arrow_up'
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down'

const cx = classNames.bind(styles);


class InputList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(new Date().toDateString());
    return (
      <div className={cx('input-wrap')}>
        <input type="text" className={cx('title')} placeholder='Title' />
        <div className={cx('tag-wrap')}>
          <span className={cx('tag')}>15kg / 10reps</span>
          <span className={cx('tag')}>15kg / 10reps</span>
          <span className={cx('tag')}>15kg / 10reps</span>
          <span className={cx('tag')}>15kg / 10reps</span>
          <span className={cx('tag')}>15kg / 10reps</span>
        </div>
        <label className={cx('item')}>
          <span className={cx('name')}>Weights</span>
          <div className={cx('button-wrap')}>
            <span className={cx('button')}><Icon icon={ic_keyboard_arrow_down} size={24} style={{ color: '#fff' }} /></span>
            <input type="number" className={cx('weight')} />
            <span className={cx('button')}><Icon icon={ic_keyboard_arrow_up} size={24} style={{ color: '#fff' }} /></span>
          </div>
        </label>
        <label className={cx('item')}>
          <span className={cx('name')}>Reps</span>
          <div className={cx('button-wrap')}>
            <span className={cx('button')}><Icon icon={ic_keyboard_arrow_down} size={24} style={{ color: '#fff' }} /></span>
            <input type="number" className={cx('weight')} />
            <span className={cx('button')}><Icon icon={ic_keyboard_arrow_up} size={24} style={{ color: '#fff' }} /></span>
          </div>
        </label>
        <button>
          save
        </button>
      </div>
    )
  }
}

class ScheduleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addOpen: true,
    }
  }
  toggle = () => {
    this.setState({
      addOpen: !this.state.addOpen
    })
  }
  render() {
    return (
      <section className={cx('scheduleList')}>
        {/* <div className={cx('addButton')} onClick={this.toggle}>
          <Icon icon={ic_add_box} size={24} style={{ color: '#fff' }} />
          <span className={cx('add')}>Add Item</span>
        </div> */}
        {this.state.addOpen ? <InputList /> : null}
        <div className={cx('list-item')}>
          <span className={cx('txt')}>Dumbbell Press</span>
          <div className={cx('tag-wrap')}>
            <span className={cx('tag')}>15kg / 10reps</span>
            <span className={cx('tag')}>15kg / 10reps</span>
            <span className={cx('tag')}>15kg / 10reps</span>
            <span className={cx('tag')}>15kg / 10reps</span>
            <span className={cx('tag')}>15kg / 10reps</span>

          </div>
        </div>
        <div className={cx('list-item')}>
          <span className={cx('txt')}>Chin up</span>
          <div className={cx('tag-wrap')}>
            <span className={cx('tag')}>0kg / 7reps</span>
            <span className={cx('tag')}>0kg / 6reps</span>
            <span className={cx('tag')}>0kg / 6reps</span>
            <span className={cx('tag')}>0kg / 5reps</span>
            <span className={cx('tag')}>0kg / 4reps</span>
          </div>
        </div>
      </section >
    );
  }
}


export default ScheduleList;