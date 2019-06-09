import React from 'react';
import './Header.scss';
import { Logo, User } from 'components/common/Icons';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const renderCount = React.useRef(0);
  console.log('<Header />', ++renderCount.current)
  return (
    <header>
      <div className="header-box">
        <NavLink to="/" className="app-title">
          <Logo width="24px" />
          Fireact
        </NavLink>
        <NavLink to="/login">
          <User width="24px" fill="#fff" />
        </NavLink>
      </div>

    </header>
  )
}

export default Header;