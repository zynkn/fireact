import React from 'react';
import './Header.scss';
import { Logo } from 'components/common/Icons';

const Header: React.FC = () => {
  const renderCount = React.useRef(0);
  console.log('<Header />', ++renderCount.current)
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