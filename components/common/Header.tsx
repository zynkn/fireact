import React from 'react';
// import Arrow from '../icons/Arrow';
import Plus from '../icons/Plus';

const Header: React.FC<any> = () => {

  return (
    <>
      <header className="Header">
        <button className="icon-btn"></button>
        <h1><img src={'../../static/assets/images/emoji_fire.png'} width={24} />  Fireact</h1>
        <button className="icon-btn">
          <Plus style={{ height: '16px', fill: 'white' }} />
        </button>
      </header>
      <style jsx>{`
        header.Header{
          user-select: none;
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
          display: flex;
          align-items: center;
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