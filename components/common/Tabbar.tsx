import React from 'react';
import Calendar from '../icons/Calendar';
import Home from '../icons/Home';
import Pulse from '../icons/Pulse';
import Chat from '../icons/Chat';
import User from '../icons/User';

const Tabbar: React.FC<any> = () => {

  return (
    <>
      <div className="Tabbar">
        <div className="tab">
          <Home style={{ transform: 'rotate(-0deg)', width: '20px', fill: 'white' }} />
        </div>
        <div className="tab">
          <Calendar style={{ transform: 'rotate(-0deg)', width: '20px', fill: 'white' }} />
        </div>
        <div className="tab">
          <Pulse style={{ transform: 'rotate(-0deg)', width: '20px', fill: 'white' }} />
        </div>
        <div className="tab">
          <Chat style={{ transform: 'rotate(-0deg)', width: '24px', fill: 'white' }} />
        </div>
        <div className="tab">
          <User style={{ transform: 'rotate(-0deg)', width: '20px', fill: 'white' }} />
        </div>
      </div>
      <style jsx>
        {`
          .Tabbar{
            display: flex;

            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 48px;
            background-color: #F64A65;
            background: linear-gradient(90deg, #F08349 25%, #F64A65 75%);
          }
          .Tabbar > .tab{
            flex: 1 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Tabbar;