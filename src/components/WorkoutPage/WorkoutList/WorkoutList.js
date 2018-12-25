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
const Tag = (props) => {
  return (
    <span className={cx('Tag')}>
      {props.weight}kg {props.reps}reps
    </span>
  )
}
const ListItem = (props) => {
  function generate() {
    const { detail } = props;
    const arr = [];

    for (let i = 0; i < detail.length; i++) {
      arr.push(<Tag key={i} weight={detail[i].weight} reps={detail[i].reps} />);
    }
    return arr;
  }
  return (
    <div className={cx('ListItem')}>
      <div className={cx('title')}>
        {props.name}
      </div>
      <div className={cx('tag-wrap')}>
        {generate()}
      </div>
    </div>
  )
}
class WorkoutList extends Component {

  generate = () => {
    const { data } = this.props;
    const arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(<ListItem key={i} name={data[i].name} detail={data[i].detail} />);
    }
    // console.log(arr);
    return arr;
  }
  render() {
    // console.log(this.props.data);
    return (
      <div className={cx('list-wrap')}>
        {/* {this.generate()} */}
        {this.props.data.length !== 0 ? this.generate() : <EmptyList />}
      </div>
    );
  }
}


export default WorkoutList;