import React, { Component } from 'react';

import styles from './Loading.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class Loading extends Component {
  componentDidMount() {
    document.querySelector('body').style.overflowY = 'hidden';
  }
  componentWillUnmount() {
    document.querySelector('body').style.overflowY = 'auto';
  }
  render() {
    return (
      <div className={cx('bg')}>
        <div className={cx('circle')}>
          <div className={cx("boxLoading")} />
          {/* <span className={cx('txt')}>Loading</span> */}
        </div>

      </div >
    );
  }
}


export default Loading;