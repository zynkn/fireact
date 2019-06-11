import React from 'react';
import './Header.scss';
import { Logo, User } from 'components/common/Icons';
import { NavLink } from 'react-router-dom';
import { StoreState } from 'stores/modules';

import { connect } from 'react-redux';
const Header: React.FC = (props: any) => {
  return (
    <header>
      <div className="header-box">
        <NavLink to="/" className="app-title">
          <Logo width="24px" />
          Fireact
        </NavLink>
        <NavLink to={props.isLogin ? "/mypage" : "/login"}>
          <User width="24px" fill="#fff" />
        </NavLink>
      </div>

    </header>
  )
}

export default connect(
  ({ user }: StoreState) => ({
    isLogin: user.isLogin
  })
)(Header);