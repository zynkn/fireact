import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.scss';
import classNames from 'classnames/bind';

import { Icon } from 'react-icons-kit'
import { ic_account_circle } from 'react-icons-kit/md/ic_account_circle'


const cx = classNames.bind(styles);


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHide: false,
    }
  }
  hideHeader = () => {
    const { isHide } = this.state;
    window.scrollY > this.prev ?
      !isHide && this.setState({ isHide: true })
      :
      isHide && this.setState({ isHide: false });
    this.prev = window.scrollY;
  }
  componentDidMount() {
    window.addEventListener('scroll', this.hideHeader);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideHeader);
  }

  render() {
    const { props } = this;
    const classHide = this.state.isHide ? 'hide' : '';
    return (
      <header className={`${cx('Header')} ${cx(classHide)}`}>
        <NavLink to="/" className={cx('title')}>
          <span role="img" aria-label="fire">🔥 </span>Fireact
        </NavLink>
        <NavLink to="/login" className={cx('login-icon')} activeClassName={cx('selected')}>
          <Icon icon={ic_account_circle} size={24} style={{ color: 'white' }} />
        </NavLink>
      </header>
    )
  }
}


export default Header;