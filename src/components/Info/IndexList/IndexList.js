import React, { Component } from 'react';

import styles from './IndexList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class IndexList extends Component {
  render() {
    return (
      <div className={cx('IndexList')}>
        <div className={cx('header')}>
          Personal Settings
        </div>
        <ul className={cx('content')}>
          <li className={cx('item')}>
            Profile
          </li>
          <li className={cx('item')}>
            Profile
          </li>
        </ul>
      </div>
    );
  }
}


export default IndexList;