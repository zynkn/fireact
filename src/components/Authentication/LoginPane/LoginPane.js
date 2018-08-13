import React from 'react';

import styles from './LoginPane.scss';
import classNames from 'classnames/bind';

import fireact from 'assets/images/fireact.png';

const cx = classNames.bind(styles);


const LoginPane = ({ children }) => (
  <section className={cx('LoginPane')}>
    <div className={cx('content')}>
      {children}
    </div>
    <div className={cx('bg')}>
      <p className={cx('title')}>Welcome to Fireact</p>
      <img className={cx('spin')} src={fireact} width="150" />
      <span />
    </div>
  </section>
);


export default LoginPane;