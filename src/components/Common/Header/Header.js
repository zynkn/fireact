import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import styles from './Header.scss';
import classNames from 'classnames/bind';

import storage from 'lib/storage';
import * as actions from 'store/modules/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Icon } from 'react-icons-kit'
import { ic_account_circle } from 'react-icons-kit/md/ic_account_circle'


const cx = classNames.bind(styles);


const Header = (props) => {

  function renderRedirect() {
    if (storage.get('user') && !props.isLogin) {
      props.Actions.setIslogin();
    }
    if (!props.isLogin && props.history.location.pathname !== '/') {
      return <Redirect to="/login" />
    }
  }
  return (
    <header className={`${cx('Header')}`}>
      {renderRedirect()}
      <NavLink to="/" className={cx('title')}>
        <span role="img" aria-label="fire">🔥 </span>Fireact
      </NavLink>
      <NavLink to={props.isLogin ? "/mypage" : "/login"} className={cx('login-icon')} activeClassName={cx('selected')}>
        <Icon icon={ic_account_circle} size={24} style={{ color: 'white' }} />
      </NavLink>
    </header>
  )
}


export default connect(
  (state) => ({
    isLogin: state.login.get('isLogin')
  }),
  (dispatch) => ({
    Actions: bindActionCreators(actions, dispatch)
  })
)(Header);