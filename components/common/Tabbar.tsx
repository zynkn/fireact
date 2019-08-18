import React from 'react';

const Tabbar:React.FC<any> = () => {

  return (
    <>
      <div className="Tabbar">

      </div>
      <style jsx>
        {`
          .Tabbar{
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 48px;
            background-color: red;
          }
        `}
      </style>
    </>
  )
}

export default Tabbar;