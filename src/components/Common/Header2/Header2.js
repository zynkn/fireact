import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header2.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit'
import { ic_account_circle } from 'react-icons-kit/md/ic_account_circle'

const cx = classNames.bind(styles);


class Dropdown extends Component {
  render() {
    return (
      <ul className={cx('dropdown')}>
        <li>Setting</li>
        <li>Logout</li>
      </ul>
    )
  }
}

class Header2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false,
    }
  }
  toggle = () => {
    this.setState({
      dropdown: !this.state.dropdown,
    })
  }
  render() {
    return (
      <div className={cx('header-wrap')}>
        <header>
          <NavLink exact to="/" className={cx('app-title')}>
            <span role="img" aria-label="fire" style={{ marginRight: '8px' }}>🔥</span>
            Fireact
          </NavLink>
          <div className={cx('login-wrap')}>
            <NavLink exact to="/auth" activeClassName={cx('active')} className={cx('login-button')}>
              <Icon icon={ic_account_circle} size={24} style={{ color: 'white' }} />
            </NavLink>
            {/* <Dropdown /> */}
          </div>
        </header>
      </div>
    );
  }
}


export default Header2;