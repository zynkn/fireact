import React from 'react';

import styles from './Loading.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const Loading = () => (
  <div className={cx("loader")}>
    <svg className={cx("circular")}>
      <circle className={cx("path")} cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
    </svg>
  </div>
);


export default Loading;