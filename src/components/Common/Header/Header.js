import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit'
import { ic_account_circle } from 'react-icons-kit/md/ic_account_circle'
import { ic_menu } from 'react-icons-kit/md/ic_menu'


const cx = classNames.bind(styles);

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }
  render() {
    return (
      <nav className={cx('Navigation')}>
        Nav
      </nav>
    )
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
    }
  }
  toggle = () => {
    this.setState({
      navOpen: !this.state.navOpen
    })
  }
  close = () => {
    if (this.state.navOpen) {
      this.setState({
        navOpen: false
      })
    }
  }
  render() {
    const { props } = this;
    return (
      <Fragment>
        <header className={cx('header-wrap')}>
          <div className={cx('header')}>
            <div className={cx('side')}>
              <span className={cx('icon-wrap')} onClick={this.toggle}>
                <Icon icon={ic_menu} size={24} style={{ color: 'white' }} />
              </span>
            </div>
            <div className={cx('appname')}>
              <NavLink exact to="/" >
                <span role="img" aria-label="fire" style={{ marginRight: '8px' }}>🔥</span>
                Fireact
              </NavLink>
            </div>
            <div className={cx('side')}>
              <NavLink to={props.isLogin ? "info" : "/auth"} className={cx('icon-wrap')} onClick={this.close}>
                <Icon icon={ic_account_circle} size={24} style={{ color: 'white' }} />
              </NavLink>
            </div>
            <ul className={cx('menu-wrap')}>
              <li>
                <NavLink exact to="/calendar" >
                  Calendar
                </NavLink>
              </li>
              <li style={{ marginLeft: '128px' }}>
                <NavLink to={props.isLogin ? "info" : "/auth"} className={cx('icon-wrap')} onClick={this.close}>
                  <Icon icon={ic_account_circle} size={24} style={{ color: 'white' }} />
                </NavLink>
              </li>
            </ul>
          </div>
        </header>
        {this.state.navOpen ? <Navigation /> : null}
      </Fragment >
    )
  }
}


export default Header;