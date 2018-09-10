import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DesktopNav.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class DesktopNav extends Component {
  render() {
    return (
      <div className={cx('nav-wrap')}>
        <nav>
          <div className={cx('menu-wrap')}>
            <NavLink exact to="/calendar" activeClassName={cx('active')}>
              History
            </NavLink>
            <NavLink exact to="/today" activeClassName={cx('active')}>
              Analysis
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }
}


export default DesktopNav;