import React from 'react';


const Header: React.FC<any> = () => {

  return (
    <>
      <header className="Header">
        Fireact
    </header>
      <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Patua+One&display=swap');
      header.Header {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        text-align: center;
        height: 52px;
        font-size: 1.5em;
        padding: 8px 0;
        box-sizing: border-box;

        color: white;
        font-family: 'Patua One', cursive;
        //background: linear-gradient(120deg, #F08349 25%, #F64A65 75%);
      }
    `}</style>
    </>
  )

}

export default Header;