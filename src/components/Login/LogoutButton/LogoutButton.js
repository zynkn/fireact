import React from 'react';

import styles from './LogoutButton.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const LogoutButton = ({onClick}) => {
  


  return (
    <button onClick={onClick}>
      Log Out
    </button>
  )
};


export default LogoutButton;