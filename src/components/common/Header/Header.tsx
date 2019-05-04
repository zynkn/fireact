import React from 'react';
import './Header.scss';
import APP_ICON from 'assets/svg/fireact.svg'

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-box">
        <span className="app-title">
          <img src={APP_ICON} alt="APP_ICON" />
          Fireact
        </span>
      </div>

    </header>
  )
}

export default Header;