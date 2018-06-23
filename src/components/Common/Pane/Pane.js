import React from 'react';

import styles from './Pane.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const Pane = ({ children }) => (
  <div className={cx('Pane')}>
    {children}
  </div>
);


export default Pane;