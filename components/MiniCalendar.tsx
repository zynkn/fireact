import React from 'react';


const MiniCalendar: React.FC<any> = () => {

  return (
    <>
      <div className="MiniCalendar">
        <div className="body">
          <div className="row">
          <div className="box sun">
              <span className="th">SUN</span>
              <span className="td added">7/29</span>
            </div>
            <div className="box">
              <span className="th">MON</span>
              <span className="td added">7/30</span>
            </div>
            <div className="box">
              <span className="th">TUE</span>
              <span className="td">7/31</span>
            </div>
            <div className="box">
              <span className="th">WED</span>
              <span className="td">8/1</span>
            </div>
            <div className="box">
              <span className="th">THU</span>
              <span className="td">8/2</span>
            </div>
            <div className="box">
              <span className="th">FRI</span>
              <span className="td">8/3</span>
            </div>
            <div className="box sat">
              <span className="th">SAT</span>
              <span className="td">8/4</span>
            </div>
            <div className="box sun">
              <span className="th">SUN</span>
              <span className="td added">8/5</span>
            </div>
            <div className="box">
              <span className="th">MON</span>
              <span className="td added">8/6</span>
            </div>
            <div className="box">
              <span className="th">TUE</span>
              <span className="td">8/7</span>
            </div>
            <div className="box">
              <span className="th">WED</span>
              <span className="td">8/8</span>
            </div>
            <div className="box">
              <span className="th">THU</span>
              <span className="td">8/9</span>
            </div>
            <div className="box">
              <span className="th">FRI</span>
              <span className="td">8/10</span>
            </div>
            <div className="box sat">
              <span className="th">SAT</span>
              <span className="td">8/11</span>
            </div>
            <div className="box sun">
              <span className="th">SUN</span>
              <span className="td">8/12</span>
            </div>
            <div className="box">
              <span className="th">MON</span>
              <span className="td">8/13</span>
            </div>
            <div className="box">
              <span className="th">TUE</span>
              <span className="td added">
              <div className="label-box">
                <span className="label blue" />
                <span className="label yellow" />
                <span className="label green" />
                <span className="label purple" />
              </div>
              8/14</span>
            </div>
            <div className="box">
              <span className="th">WED</span>
              <span className="td added">8/15</span>
            </div>
            <div className="box">
              <span className="th">THU</span>
              <span className="td added">
              <div className="label-box">
                <span className="label red" />
              </div>
              <span className="today">8/16</span>
            </span>
            </div>
          </div>
        </div>
        
      </div>
      <style jsx>
      {`
        .MiniCalendar{
          font-family: 'Noto Sans KR', sans-serif;
          background-color: white;
          border-radius: 3px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          margin-bottom: 1em;
          overflow: hidden;
          padding: 8px;
          user-select: none;
        }
        .body > .row{
          display: flex;
          overflow-x: auto;
        }
        .body > .row > .box{
          display: inline-flex;
          flex-direction: column;
          flex: 0 0 calc(100%/7);
          //border: 1px solid red;
        }
        .box.sun{
          color: red;
        }
        .box.sat{
          color: blue;
        }
        .body > .row > .box > .th {
          text-align: center;
          font-weight: bold;
          padding: 0.5em 0;
          font-size: 0.8em;
        }
        .body > .row > .box > .td{
          position: relative;
          display: inline-flex;
          align-items: center;
          font-size: 0.8em;
          font-weight: bold;
          justify-content: center;
        }
        .body > .row > .box > .td::before{
          padding-top: 100%;
          float: left;
          content: '';
        }
        .td.gray{
          color: #919191 !important;
        }
        .td.added{
          background-color: #f6f6f6;

        }

        .td > .today{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex:0 0 60%;
          border-radius: 100%;
          background: #F64A65;;
          color: white;
        }
        .td > .today::before{
          content: ''; 
          float: left;
          padding-top: 100%;

        }

        .label-box{
          display: flex;
          position: absolute;
          top: 1vw;
        }
        .label{
          display: inline-block;
          width: 1vw;
          height: 1vw;
          border-radius: 100%;
          background: red;
        }
        .label.red{
          background: #e33a3d
        }
        .label.orange{
          background: #ff9648
        }
        .label.yellow{
          background: #fed042
        }
        .label.green{
          background: #009441
        }
        .label.blue{
          background: #3871f7
        }
        .label.purple{
          background: #8c48f7
        }
        .label + .label{
          margin-left: 2px;
        }

      `}  
      </style>
    </>
  )
}

export default MiniCalendar;