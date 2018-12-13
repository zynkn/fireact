import React from 'react';

import styles from './LoginBtn.scss';
import classNames from 'classnames/bind';
import Google from 'assets/svg/Google.svg';

const cx = classNames.bind(styles);


const LoginBtn = (props) => (
  <button className={cx('LoginBtn')} style={props.style}>
    <img src={props.img} />
    {props.title}
  </button>
);


export default LoginBtn;