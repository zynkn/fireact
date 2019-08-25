import React from 'react';
// import Arrow from '../icons/Arrow';
import User from '../icons/User';


const Header: React.FC<any> = () => {

  return (
    <>
      <header className="Header">
        <button className="icon-btn">1</button>
        <h1>Fireact</h1>
        <button className="icon-btn">
          <User style={{height: '20px', fill: 'white'}} />
        </button>
      </header>
      <style jsx>{`
        header.Header{
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 52px;
          max-height: 52px;
          background-color: #382A58;
          color: white;
          font-size: 14px;
        }
        header.Header > h1{
          font-size: 18px;
        }
        header.Header > .icon-btn{
          height: 100%;
          width: 52px;
          border: 0;
          background: transparent;
        }
      `}</style>
    </>
  )

}

export default Header;