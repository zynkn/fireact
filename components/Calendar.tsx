import React from 'react';
import Arrow from './icons/Arrow';


const Calendar: React.FC<any> = () => {
  return (
    <>
      <div className="Calendar">
        <div className="head">
          <button>
            <Arrow style={{ transform: 'rotate(-90deg)', width: '24px' }} />
          </button>

          <span className="title">August 2019</span>
          <button>
            <Arrow style={{ transform: 'rotate(90deg)', width: '24px' }} />
          </button>
        </div>
        <div className="body">
          <div className="row">
            <span className="th">Sun</span>
            <span className="th">Mon</span>
            <span className="th">Tue</span>
            <span className="th">Wed</span>
            <span className="th">Thu</span>
            <span className="th">Fri</span>
            <span className="th">Sat</span>
          </div>
          <div className="row">
            <span className="td gray">22</span>
            <span className="td gray">23</span>
            <span className="td gray">24</span>
            <span className="td gray">25</span>
            <span className="td gray">26</span>
            <span className="td gray added">27</span>
            <span className="td gray added">28</span>
          </div>
          <div className="row">
            <span className="td gray">29</span>
            <span className="td gray">30</span>
            <span className="td gray">31</span>
            <span className="td ">1</span>
            <span className="td ">2</span>
            <span className="td ">3</span>
            <span className="td ">4</span>
          </div>
          <div className="row">
            <span className="td ">5</span>
            <span className="td ">6</span>
            <span className="td ">7</span>
            <span className="td ">8</span>
            <span className="td ">9</span>
            <span className="td ">10</span>
            <span className="td ">11</span>
          </div>
          <div className="row">
            <span className="td ">12</span>
            <span className="td ">13</span>
            <span className="td added">
              <div className="label-box">
                <span className="label" />
                <span className="label" />
                <span className="label" />
                <span className="label" />
              </div>
              14</span>
            <span className="td added">15</span>
            <span className="td added">
              <div className="label-box">
                <span className="label" />
              </div>
              <span className="today">16</span>
            </span>
            <span className="td ">17</span>
            <span className="td ">18</span>
          </div>
          <div className="row">
            <span className="td ">19</span>
            <span className="td ">20</span>
            <span className="td ">21</span>
            <span className="td ">22</span>
            <span className="td ">23</span>
            <span className="td ">24</span>
            <span className="td ">25</span>
          </div>
          <div className="row">
            <span className="td ">26</span>
            <span className="td ">27</span>
            <span className="td ">28</span>
            <span className="td ">29</span>
            <span className="td ">30</span>
            <span className="td ">31</span>
            <span className="td gray">1</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .Calendar{
            font-family: 'Noto Sans KR', sans-serif;
           
            background-color: white;
            border-radius: 3px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            margin-bottom: 1em;
            overflow: hidden;
            padding: 8px;
            user-select: none;
          }
          .head{
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            height: 36px;
            font-size: 1em;
            text-align: center;
          }
          .head > button{
            display: flex;
            align-items: center;
            background: transparent;
            border: 0;
          }
          .head > .title {
            display: inline-block;
            padding: 8px 12px;
            font-weight: bold;
          }
          .head > .title:hover{
            background-color: #f1f1f1;
          }
          .body{

          }
          .body > .row{
            display: flex;
          }
          .body > .row > .th,
          .body > .row > .td
          {
            font-size: 0.8em;
            display: flex;
            position: relative;
            align-items:center;
            justify-content: center;
            flex: 1 0 calc(100%/7);
            text-align: center;
            text-transform: uppercase;
            font-weight: bold;
          }
          .body > .row > .th:nth-child(1),
          .body > .row > .td:nth-child(1){
            color: red;
          }
          .body > .row > .th:last-child,
          .body > .row > .td:last-child{
            color: blue;
          }
          .body > .row > .th::before,
          .body > .row > .td::before{
            content: '';
            float: left;
            padding-top: 100%;
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
          .label + .label{
            margin-left: 2px;
          }
        `}
      </style>
    </>
  )
}

export default Calendar;