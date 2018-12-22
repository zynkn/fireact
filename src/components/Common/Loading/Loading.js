import React, { Component } from 'react';

import styles from './Loading.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class Loading extends Component {
  render() {
    return (
      <div className={cx('bg')}>
        <div className={cx("boxLoading")} />
        <span className={cx('txt')}>Loading</span>
      </div >
    );
  }
}


export default Loading;