import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BottomNav.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit'
import { ic_timeline } from 'react-icons-kit/md/ic_timeline'
import { ic_home } from 'react-icons-kit/md/ic_home'
import { ic_event_note } from 'react-icons-kit/md/ic_event_note'

const cx = classNames.bind(styles);


class BottomNav extends Component {
  onClickBlock = (e) => {
    e.preventDefault()
  }
  render() {
    return (
      <nav className={cx('BottomNav')}>
        <NavLink exact to="/" className={cx('item')} activeClassName={cx('selected')}>
          <Icon icon={ic_home} size={24} style={{ color: 'white' }} />
        </NavLink>
        <NavLink exact to="/workout" className={cx('item')} activeClassName={cx('selected')}>
          <Icon icon={ic_event_note} size={24} style={{ color: 'white' }} />
        </NavLink>
        <NavLink onClick={this.onClickBlock} to="/analysis" className={cx('item')} activeClassName={cx('selected')}>
          <Icon icon={ic_timeline} size={24} style={{ color: 'white' }} />
        </NavLink>
      </nav>
    );
  }
}


export default BottomNav;