import React from 'react';
import Arrow from '../icons/Arrow';
import Plus from '../icons/Plus';


const Header: React.FC<any> = () => {

  return (
    <>
      <header className="Header">
        <button>
          <Arrow style={{ transform: 'rotate(-90deg)', width: '28px', fill: 'white' }} />
        </button>
        August 14 2019
        <button>
          <Plus style={{ transform: 'rotate(90deg)', width: '16px', fill: 'white' }} />
        </button>
      </header>
      <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Patua+One&display=swap');
      header.Header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        text-align: center;
        height: 48px;
        font-size: 1.2em;
        //padding: 8px 0;
        box-sizing: border-box;
        background: linear-gradient(90deg, #F08349 25%, #F64A65 75%);
        color: white;
        font-family: 'Patua One', cursive;
        overflow: hidden;
      }
      // .Header::after{
      //   z-index: -1;
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   right: 0;
 
      //   min-height: 100vh;
      //   content: "";
      //   background: linear-gradient(120deg,#F08349 25%,#F64A65 75%);
      // }
      .Header > button{
        height: 100%;
        width: 48px;
        background-color: transparent;
        border: 0;
        color: white;
      }
      .Header > button >svg{
        fill: white;
      }
    `}</style>
    </>
  )

}

export default Header;