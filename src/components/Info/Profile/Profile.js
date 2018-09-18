import React, { Component } from 'react';

import styles from './Profile.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class Profile extends Component {
  render() {
    return (
      <div className={cx('Profile')}>
        Profile
      </div>
    );
  }
}


export default Profile;