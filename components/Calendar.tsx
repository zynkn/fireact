import React from 'react';
import Arrow from './icons/Arrow';
import moment from 'moment';


function generate(today:any){
  //const today = moment();
  console.log(today);
  const startWeek = today.clone().startOf('month').week()-1;
  const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week()+1;
  let calendar = [];
  for (let week = startWeek; week <= endWeek; week++) {
    calendar.push(
      <div className="row" key={week}>
        {
          Array(7).fill(0).map((n, i) => {
            let current = today.clone().week(week).startOf('week').add(n + i, 'day')
            let isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'today' : '';
            let isGrayed = current.format('MM') === today.format('MM') ? '' : 'gray';
            return (
              <span className={`td ${isGrayed}`} key={i}>
                <span className={`${isSelected}`}>{current.format('D')}</span>
              </span>
            )
          })
        }
      </div>
    )
  }
  return calendar;
}

const Calendar: React.FC<any> = () => {
  const [now, setNow]:any = React.useState(moment());
  React.useEffect(()=>{
    // ComponentDidMount()
  },[]);
  console.log(now);


  return (
    <>
      <div className="Calendar">
        <div className="head">
          <button onClick={()=>setNow(now.clone().subtract(1,'months'))}>
            <Arrow style={{ transform: 'rotate(-90deg)', width: '24px' }} />
          </button>

          <span className="title">{now.format('MMMM YYYY')}</span>
          <button onClick={()=>setNow(now.clone().add(1,'months'))}>
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
          {/* <div className="row">
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
                <span className="label blue" />
                <span className="label yellow" />
                <span className="label green" />
                <span className="label purple" />
              </div>
              14</span>
            <span className="td added">15</span>
            <span className="td added">
              <div className="label-box">
                <span className="label red" />
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
          </div> */}
          {generate(now)}
        </div>
      </div>
      <style jsx global>
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
          .Calendar > .head{
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            height: 36px;
            font-size: 1em;
            text-align: center;
          }
          .Calendar > .head > button{
            display: flex;
            align-items: center;
            background: transparent;
            border: 0;
          }
          .Calendar > .head > .title {
            display: inline-block;
            padding: 8px 12px;
            font-weight: bold;
          }
          .Calendar > .head > .title:hover{
            background-color: #f1f1f1;
          }
          .Calendar > .body{

          }
          .Calendar > .body > .row{
            display: flex;
          }
          .Calendar > .body > .row > .th,
          .Calendar > .body > .row > .td
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
          .Calendar > .body > .row > .th:nth-child(1),
          .Calendar > .body > .row > .td:nth-child(1){
            color: red;
          }
          .Calendar > .body > .row > .th:last-child,
          .Calendar > .body > .row > .td:last-child{
            color: blue;
          }
          .Calendar > .body > .row > .th::before,
          .Calendar > .body > .row > .td::before{
            content: '';
            float: left;
            padding-top: 100%;
          }
          .Calendar > .body > .row > .td.gray{
            color: #919191 !important;
          }
          .Calendar > .body > .row > .td.added{
            background-color: #f6f6f6;

          }
          .Calendar > .body > .row > .td > .today{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex:0 0 60%;
            border-radius: 100%;
            background: #F64A65;;
            color: white;
          }
          .Calendar > .body > .row > .td > .today::before{
            content: ''; 
            float: left;
            padding-top: 100%;

          }

          .Calendar > .body > .row > .td > .label-box{
            display: flex;
            position: absolute;
            top: 1vw;
          }
          .Calendar > .body > .row > .td > .label-box >.label{
            display: inline-block;
            width: 1vw;
            height: 1vw;
            border-radius: 100%;
            
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

export default Calendar;