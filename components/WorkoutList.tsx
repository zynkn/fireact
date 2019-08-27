import React from 'react';
import { COLORS } from "../utils/variables";

const LABELS: any = {
  "triceps": "삼두",
  "biceps": "이두",
  "back": "등",
  "shoulder": "어깨",
  "chest": "가슴",
  "abdominal": "복부",
  "legs": "하체",
}
const datas: any = [
  {
    category: "triceps",
    name: "오버헤드 트라이셉스 익스텐션",
    sets: {
      "1566745474": { weight: 15, reps: 10, unit: "kg" },
    }
  }, {
    category: "biceps",
    name: "바이셉스 컬 머신",
    sets: {
      "1566745534": { weight: 35, reps: 10, unit: "kg" },
      "1566745602": { weight: 35, reps: 10, unit: "kg" },
    }
  }, {
    category: "back",
    name: "랫 풀 다운",
    sets: {
      "1566745676": { weight: 35, reps: 10, unit: "kg" },
      "1566745744": { weight: 35, reps: 10, unit: "kg" },
      "1566745883": { weight: 35, reps: 10, unit: "kg" },
    }
  }, {
    category: "shoulder",
    name: "오버헤드 바벨 프레스",
    sets: {
      "1566745983": { weight: 35, reps: 10, unit: "kg" },
      "1566746098": { weight: 35, reps: 10, unit: "kg" },
      "1566746224": { weight: 35, reps: 10, unit: "kg" },
      "1566746382": { weight: 35, reps: 10, unit: "kg" },
    }
  }, {
    category: "chest",
    name: "벤치 프레스",
    sets: {
      "1566746483": { weight: 60, reps: 10, unit: "kg" },
      "1566746701": { weight: 70, reps: 10, unit: "kg" },
      "1566746854": { weight: 70, reps: 10, unit: "kg" },
      "1566746996": { weight: 70, reps: 10, unit: "kg" },
      "1566747071": { weight: 70, reps: 10, unit: "kg" },
    }
  }, {
    category: "abdominal",
    name: "헹잉 레그 레이즈",
    sets: {
      "1566747274": { weight: 60, reps: 10, unit: "kg" },
      "1566747383": { weight: 70, reps: 10, unit: "kg" },
      "1566747494": { weight: 70, reps: 10, unit: "kg" },
      "1566747594": { weight: 70, reps: 10, unit: "kg" },
      "1566747664": { weight: 70, reps: 10, unit: "kg" },
      "1566747734": { weight: 70, reps: 10, unit: "kg" },
      "1566747816": { weight: 70, reps: 10, unit: "kg" },
    }
  }, {
    category: "legs",
    name: "스쿼트",
    sets: {
      "1566748075": { weight: 60, reps: 10, unit: "kg" },
      "1566748172": { weight: 70, reps: 10, unit: "kg" },
      "1566748277": { weight: 70, reps: 10, unit: "kg" },
      "1566748343": { weight: 70, reps: 10, unit: "kg" },
      "1566748452": { weight: 70, reps: 10, unit: "kg" },

      "1566748534": { weight: 70, reps: 10, unit: "kg" },
      "1566748618": { weight: 70, reps: 10, unit: "kg" },
      "1566748697": { weight: 70, reps: 10, unit: "kg" },
      "1566748776": { weight: 70, reps: 10, unit: "kg" },
      "1566748862": { weight: 70.5, reps: 9, unit: "kg" },

    }
  }
]

function hex2RGB(hex: string) {
  return `${parseInt(hex.substr(1, 2), 16)}, ${parseInt(hex.substr(3, 2), 16)}, ${parseInt(hex.substr(5, 2), 16)}`
}

const WorkoutList: React.FC<any> = () => {

  return (
    <>
      <div className="WorkoutList">
        {
          datas.map((data: any) => {
            return <ListItem key={data.name} {...data} />
          })
        }
      </div>
      <style jsx>{`
      
      `}</style>
    </>
  )
}

interface CategoryProps {
  text: string;
  category: string;
}

const Category: React.FC<CategoryProps> = ({ text, category }) => {
  return (
    <>
      <span className={`Category ${category}`}>
        {text}
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
          background: black;
          border-radius: 3px;
        }
        .Category.${category}{
          background-color: ${COLORS[category]}
        }
        
      `}</style>
    </>
  )
}

const HistoryItem: React.FC<any> = ({ category, weight, unit, reps, index }) => {
  return (
    <>
      <div className={`item ${category}`}>
        <span className="set">{index}</span>
        <span className="weight">{weight} {unit}</span>
        <span className="reps">{reps}</span>
      </div>
      <style jsx>{`
      .item{
        background-color: rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        border-radius: 2px 2px 2px 2px;
        cursor: pointer;
      }
      .item + .item{
        margin-top: 2px;
      }
      .item > .set{
        flex: 0 0 16px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 16px;
        height: 16px;
        font-size: 9px;
        border-radius: 2px 2px 2px 2px;
        background: #E85BFF;
        color: white;
      }
      .item.${category} > .set{
        background: ${COLORS[category]}
      }
      .item > .weight{
        flex: 1 1 0;
        display: inline-flex;
        font-size: 8px;
        align-items: center;
        //background-color: rgba(232,91,255,0.6);
        color: white;
        padding-left: 6px;
        padding-right: 4px;
        height: 16px;
        border-radius: 0px 2px 2px 0px;
        white-space: nowrap;
        overflow-x: hidden;
        transform: translateX(-2px);
      }
      .item.${category} > .weight{
        background: rgba(${hex2RGB(COLORS[category])},0.8);
      }
      .item > .reps{
        flex: 0 0 16px;
        width: 16px;
        font-size: 8px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: white;
        
      }
      `}</style>
    </>
  )
}
const ListItem: React.FC<any> = ({ category, name, sets }) => {

  function generate() {
    let SETS: any = [];
    let COL: any = [];
    Object.values(sets).reverse().forEach((set, index, arr) => {
      COL.push(
        <HistoryItem category={category} index={arr.length - index} {...set} />
      )
      if ((index + 1) % 5 === 0) {
        SETS.push(
          <div className="column" style={{ flex: '0 0 50%', padding: '2px', boxSizing: 'border-box' }}>
            {COL}
          </div>
        );
        COL = [];
      }
    });
    if (COL.length !== 0) {
      SETS.push(
        <div className="column" style={{ flex: '0 0 50%', padding: '2px', boxSizing: 'border-box' }}>
          {COL}
        </div>
      );
    }

    return SETS;
  }
  return (
    <>
      <div className="ListItem">
        <div className="summary">
          <div className="head">
            <Category text={LABELS[category]} category={category} />
            <span className="name">
              <span>
                {name}
              </span>
            </span>
          </div>
          <div className="content">
            <div className="box">
              <span className="name">
                운동 볼륨
              </span>
              <span className="value">
                {
                  Object.values(sets).reduce((acc: number, v: any) =>
                    acc += (v.weight * v.reps), 0)
                }
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
                {Object.values(sets).length}
              </span>
            </div>
          </div>
        </div>
        <div className="history-wrap">
          {/* <div className="column">
            {
              Object.values(sets).reverse().map((set: any, index: number) => {
                return <HistoryItem category={category} index={Object.values(sets).length - index} {...set} />
              })
            }
          </div> */}
          {generate()}
        </div>
      </div>
      <style jsx>{`

        .ListItem{
          display: flex;
          background-color: #46356B;
          padding: 4px;
          box-sizing: border-box;
          height: 100px;
          user-select: none;
         // cursor: pointer;
        }
        .ListItem:hover{
          background-color: rgba(70, 53, 107, 0.5);
        }
        .ListItem * {
          box-sizing: border-box;
        }
        .ListItem + .ListItem{
          margin-top: 2px;
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
        .ListItem > .summary > .head > .name:hover{
          background-color: rgba(0,0,0,0.1);
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
          //background-color: rgba(0,0,0,0.2);
          display: flex;
          overflow-x: auto;
        }
        .ListItem > .history-wrap > .column{
          // display: flex;
          // flex-direction: column-reverse;

          flex: 0 0 50%;
          padding: 2px;
          //height: 50px;
          font-size: 10px;
        }
        .ListItem > .history-wrap > .column >.item{
          background-color: rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          border-radius: 0px 2px 2px 0px;
          cursor: pointer;
        }
        .ListItem > .history-wrap > .column >.item + .item{
          margin-top: 2px;
        }
        .ListItem > .history-wrap > .column >.item > .set{
          flex: 0 0 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 16px;
          height: 16px;
          font-size: 9px;
          border-radius: 2px 0 0 2px;
          background: #E85BFF;
          color: white;
        }
        .ListItem > .history-wrap > .column >.item > .weight{
          flex: 1 1 0;
          display: inline-flex;
          font-size: 8px;
          align-items: center;
          background-color: rgba(232,91,255,0.6);
          color: white;
          padding-left: 4px;
          height: 16px;
          border-radius: 0px 2px 2px 0px;
          white-space: nowrap;
          overflow-x: hidden;
        }
        .ListItem > .history-wrap > .column >.item > .reps{
          flex: 0 0 16px;
          width: 16px;
          font-size: 8px;
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