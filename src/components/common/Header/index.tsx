import React from 'react';
import './Header.scss';


interface HeaderProps{
  title?: string;
  [key: string]: any;
}

const Header:React.FC<HeaderProps> = ({title='🔥 Fireact'}) => {


  return (
    <header className="Header">

      <span className="app-title">
        <h1>{title}</h1>
      </span>
      <span className="btn-box">
        
      </span>
    </header>
  )
}
export default Header;