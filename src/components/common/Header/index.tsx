import React from 'react';
import './Header.scss';


interface HeaderProps{
  [key: string]: any;
}

const Header:React.FC<HeaderProps> = ( props) => {


  return (
    <header className="Header">
      Header
    </header>
  )
}
export default Header;