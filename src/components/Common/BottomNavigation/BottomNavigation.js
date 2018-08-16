import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BottomNavigation.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit'
import { ic_add_circle_outline } from 'react-icons-kit/md/ic_add_circle_outline'
import { ic_timeline } from 'react-icons-kit/md/ic_timeline'
import { ic_home } from 'react-icons-kit/md/ic_home'

const cx = classNames.bind(styles);


class BottomNavigation extends Component {
  render() {
    return (
      <nav className={cx('nav-wrap')}>
        <div className={cx('nav')}>
          <div className={cx('item')}>
            <NavLink exact to="/" activeClassName={cx('active')}>
              <Icon icon={ic_home} size={24} style={{ color: 'white' }} />
            </NavLink>
            <span className={cx('txt')}>home</span>
          </div>
          <div className={cx('item')}>
            <NavLink exact to="/auth" activeClassName={cx('active')}>
              <Icon icon={ic_add_circle_outline} size={24} style={{ color: 'white' }} />
            </NavLink>
            <span className={cx('txt')}>add</span>
          </div>
          <div className={cx('item')}>
            <NavLink exact to="/today" activeClassName={cx('active')}>
              <Icon icon={ic_timeline} size={24} style={{ color: 'white' }} />
            </NavLink>
            <span className={cx('txt')}>analysis</span>
          </div>
        </div>
      </nav>
    );
  }
}


export default BottomNavigation;