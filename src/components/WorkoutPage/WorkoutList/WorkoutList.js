import React, { Component } from 'react';

import styles from './WorkoutList.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit';
import { ic_event_busy } from 'react-icons-kit/md/ic_event_busy'

const cx = classNames.bind(styles);


const EmptyList = () => (
  <div className={cx('empty-wrap')}>
    <Icon icon={ic_event_busy} size={48} style={{ color: '#9e9e9e' }} />
    <p className={cx('txt')}>We have no data to display</p>
  </div>
)
const Tag = () => {
  return (
    <span className={cx('Tag')}>
      15kg 10reps
    </span>
  )
}
const ListItem = (props) => {
  return (
    <div className={cx('ListItem')}>
      <div className={cx('title')}>
        Dumbbell Press
      </div>
      <div className={cx('tag-wrap')}>
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />

      </div>
    </div>
  )
}
class WorkoutList extends Component {
  render() {
    return (
      <div className={cx('list-wrap')}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        {this.props ? <EmptyList /> : null}
      </div>
    );
  }
}


export default WorkoutList;