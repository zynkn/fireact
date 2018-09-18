import React from 'react';

import styles from '../containers/RecordContainer.scss';
import classNames from 'classnames/bind';
import InfoContainer from '../containers/InfoContainer';

const cx = classNames.bind(styles);

const Info = () => {
  console.log(this.props);
  return (
    <div style={{ height: '100vh', display: 'flex', background: '#f3f5f7', flexDirection: 'column', alignItems: 'center' }}>
      {/* <div className={cx('pane')}></div> */}
      <InfoContainer />
    </div>
  );
};

export default Info;