import React, { Component } from 'react';

import styles from './HistoryList.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit';
import {ic_event_busy} from 'react-icons-kit/md/ic_event_busy'

const cx = classNames.bind(styles);


const EmptyList = () => (
  <div className={cx('empty-wrap')}>
    <Icon icon={ic_event_busy} size={48} style={{ color: '#9e9e9e' }} />
    <p className={cx('txt')}>We have no data to display</p>
  </div>
)
class HistoryList extends Component {
  render() {
    return (
      <div className={cx('list-wrap')}>
        <EmptyList />
      </div>
    );
  }
}


export default HistoryList;