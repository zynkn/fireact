import React from 'react';
import More from './icons/More';
import {colorSet} from '../utils/variables';

const ListItem:React.FC<any> = (props) => {

  return (
    <>
      <div className="ListItem">
        <div className="head">
          <span className="name">
          벤치 프레스
          </span>
          <div className="right-tab">
            <span className="time">1m ago..</span>
            <span className="set"> 1set</span>
            <span className="icon">
              <More style={{ fill: "#bebebe", transform: 'rotate(0deg)', width: '20px' }}/>
            </span>
          </div>
        </div>
        <div className="body">
          <span className="tag">
            100kg 10reps
          </span>
          <span className="tag --flat" />
          <span className="tag">
            100kg 10reps
          </span>
          <span className="tag">
            100kg 10reps
          </span>
          <span className="tag">
            100kg 10reps
          </span>
          <span className="tag">
            100kg 10reps
          </span>
        </div>
        
      </div>
      <div className="overlay" />
      <style jsx>
        {`
        // .overlay{
        //   position: fixed;
        //   top: 0;
        //   left: 0;
        //   bottom: 0;
        //   right: 0;
        //   background-color: rgba(0,0,0,0.36);
        //   z-index: 9999;
        // }
        .ListItem{
          //z-index: 10000;
          position: relative;
          font-family: 'Noto Sans KR', sans-serif;
          background-color: white;
          border-radius: 3px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          margin-bottom: 1em;
          overflow: hidden;
          padding: 8px;
          user-select: none;
        }
        .ListItem > .head{
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8em;
        }
        .ListItem > .head > .name{
          font-size: 1.2em;
        }
        .ListItem > .head > .right-tab {
          display: flex;
          align-items: center;808080
        }
        .ListItem > .head > .right-tab > .time{
          color: #bebebe;
          margin-right: 8px;
        }
        .ListItem > .head > .right-tab > .set{
          padding: 2px 4px;
          background-color: ${colorSet[props.theme] || colorSet['gray']};
          color: white;
          border-radius: 3px;
          margin-right: 8px;
        }
        .ListItem > .head > .right-tab > .icon{
          font-size: 0;
          display: inline-block;
        }

        .ListItem > .body{
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          padding-top: 8px;
          font-size: 0.8em;
        }
        .ListItem > .body > .tag{
          display: inline-flex;
          text-overflow: nowrap;
          word-break: keep-all;
          white-space: nowrap;
          flex-wrap: nowrap;
          align-items: center;
          padding: 2px 4px;
          border-radius: 3px;
          background-color: ${colorSet[props.theme] || colorSet['gray']};
          color: white;
        }
        .ListItem > .body > .tag.--flat{
          //width: 2px;
          //background: green;
        }
        .ListItem > .body > .tag + .tag{
          margin-left: 4px;
        }
        
        `}
      </style>
    </>
  )
}

const WorkoutList:React.FC<any> = () => {

  return (
    <>
    <div className="WorkoutList">
      <ListItem theme="blue"/>
      <ListItem />
      <ListItem />
      
      <ListItem />
      
      <ListItem />
      
      <ListItem />
      
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      
    </div>
    <style jsx global>
    {`
      
    `}
    </style>
    </>
    
  )
}

export default WorkoutList;

