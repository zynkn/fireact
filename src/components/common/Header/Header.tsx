import React from 'react';
import './Header.scss';
import { Logo } from 'components/common/Icons';
import APP_ICON from 'assets/svg/fireact.svg'

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-box">
        <span className="app-title">
          <Logo width="24px" />
          Fireact
        </span>
      </div>

    </header>
  )
}

export default Header;