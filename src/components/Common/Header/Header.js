import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit'
import { ic_account_circle } from 'react-icons-kit/md/ic_account_circle'
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down'
import { ic_menu } from 'react-icons-kit/md/ic_menu'


const cx = classNames.bind(styles);

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }
  open = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const { name } = this.props;
    const { isOpen } = this.state;
    console.log(this.props);
    return (
      <div className={cx('Dropdown')}>
        <span className={cx('name')} onClick={this.open}>
          {name} <Icon icon={ic_keyboard_arrow_down} size={20} style={{ color: 'white', marginLeft: '8px' }} />
        </span>
        {isOpen ? (<ul className={cx('dropdown-wrap')}>
          <li onClick={this.props.logout}>Logout</li>
        </ul>) : ''}

      </div>
    )
  }
}

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
              Fireact
          </div>
            <div className={cx('side')}>
              <NavLink to={props.isLogin ? "info" : "/auth"} className={cx('icon-wrap')} onClick={this.close}>
                <Icon icon={ic_account_circle} size={24} style={{ color: 'white' }} />
              </NavLink>
            </div>
          </div>
        </header>
        {this.state.navOpen ? <Navigation /> : null}
      </Fragment>

    )
  }
}


export default Header;