import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BottomNavigation.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit'
import { ic_timeline } from 'react-icons-kit/md/ic_timeline'
import { ic_home } from 'react-icons-kit/md/ic_home'
import { ic_assignment } from 'react-icons-kit/md/ic_assignment'

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
            <NavLink exact to="/calendar" activeClassName={cx('active')}>
              <Icon icon={ic_assignment} size={24} style={{ color: 'white' }} />
            </NavLink>
            <span className={cx('txt')}>calendar</span>
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