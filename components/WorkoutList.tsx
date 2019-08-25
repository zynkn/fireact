import React from 'react';


const WorkoutList: React.FC<any> = () => {

  return (
    <>
      <div className="WorkoutList">
        <ListItem />
      </div>
      <style jsx>{`
      
      `}</style>
    </>
  )
}

const Category: React.FC<any> = (props) => {
  return (
    <>
      <span className="Category">
        {props.text || '삼두'}
      </span>
      <style jsx>{`
        .Category{
          flex: 0 0 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          font-size: 10px;
          background: #E85BFF;
          border-radius: 3px;
        }
      `}</style>
    </>
  )
}
const ListItem: React.FC<any> = () => {

  return (
    <>
      <div className="ListItem">
        <div className="summary">
          <div className="head">
            <Category />
            <span className="name">
              <span>
                오버헤드 트라이셉스 익스텐션
              </span>
            </span>
          </div>
          <div className="content">
            <div className="box">
              <span className="name">
                운동 볼륨
              </span>
              <span className="value">
                3700
                <span>.5</span>
              </span>
            </div>
            <div className="box">
              <span className="name">
                운동 시간
              </span>
              <span className="value">
                16
                <span> 분</span>
              </span>
            </div>
            <div className="box">
              <span className="name">
                세트 수
              </span>
              <span className="value">
                8
              </span>
            </div>
          </div>
        </div>
        <div className="history-wrap">
          <div className="column">
            <div className="item">
              <span className="set">1</span>
              <span className="weight">17.5 kg</span>
              <span className="reps">10</span>
            </div>
          </div>
 
        </div>
      </div>
      <style jsx>{`

        .ListItem{
          display: flex;
          background-color: #46356B;
          padding: 4px;
          box-sizing: border-box;
        }
        .ListItem * {
          box-sizing: border-box;
        }
        .ListItem > .summary{
          min-width: 0;
          color: white;
          display: flex;
          flex-direction: column;
          min-height: 40px;
          flex: 0 0 60%;
        }
        .ListItem > .summary > .head{
          min-width: 0;
          box-sizing: border-box;
          padding: 0 4px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .ListItem > .summary > .head > .name{
          min-width: 0;
          height: 32px;
          width: 100%;
          display: inline-flex;
          align-items: center;
          margin-left: 4px;
          padding: 0 4px;
          box-sizing: border-box;

          border-radius: 3px;
          text-overflow: ellipsis;
          font-size: 13px;
          font-weight: bold;
          white-space: nowrap;
          overflow-x: hidden;
        }
        .ListItem > .summary > .head > .name > span{
          overflow-x: auto;
        }
        .ListItem > .summary > .content {
          display: flex;
          padding: 4px;
        }
        .ListItem > .summary > .content > .box{
          display: flex;
          align-items: center;
          flex-direction: column;
          flex: 1 1 0;
          padding: 2px;
          justify-content: center;
        }
        .ListItem > .summary > .content > .box > .name{
          font-size: 10px;
          font-weight: bold;
          color: #8CE5E1;
        }
        .ListItem > .summary > .content > .box > .value{
          font-size: 20px;
        }
        .ListItem > .summary > .content > .box > .value > span{
          font-size: 10px;
        }

        .ListItem > .history-wrap{
          flex: 0 0 40%;
          background-color: rgba(0,0,0,0.2);
          display: flex;
          overflow-x: auto;
        }
        .ListItem > .history-wrap > .column{
          flex: 0 0 50%;
          //background:red;
          padding: 2px;
          height: 50px;
          font-size: 10px;
        }
        .ListItem > .history-wrap > .column >.item{
          background-color: rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
        }
        .ListItem > .history-wrap > .column >.item > .set{
          flex: 0 0 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 16px;
          height: 16px;
          font-size: 9px;
          border-radius: 2px;
          background: #E85BFF;
          color: white;
        }
        .ListItem > .history-wrap > .column >.item > .weight{
          flex: 1 1 0;
          display: inline-flex;
          background-color: red;
          color: white;
          padding-left: 4px;
        }
        .ListItem > .history-wrap > .column >.item > .reps{
          flex: 0 0 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          color: white;

        }
      `}</style>
    </>
  )
}

export default WorkoutList;