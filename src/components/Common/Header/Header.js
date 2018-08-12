import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const Header = () => (
  <div className={cx('Header')}>
    <div className={cx('content')}>
      <span className={cx('title')}><NavLink to="/">🔥Fireact⚛️</NavLink></span>
      <ul className={cx('menu-wrap')}>
        <li><NavLink to="/auth" activeClassName={cx('active')}>Authentication</NavLink></li>
        <li><NavLink to="/db" activeClassName={cx('active')}>Database</NavLink></li>
      </ul>
    </div>
  </div>
);


export default Header;