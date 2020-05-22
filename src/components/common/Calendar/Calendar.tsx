import React from 'react';
import './Calendar.scss';
import { Arrow } from '../Icons';


interface CalendarProps{
  [key: string]: any;
}
const Calendar:React.FC<CalendarProps> = (props)=>{

  return (
    <div className="Calendar">
      <div className="row">
        <button className="box" style={{background: 'transparent', border: 'none'}}>
          <Arrow width={16} style={{transform: `rotate(90deg)`}} />
        </button>
        <h3 className="title">May 2020</h3>
        <button className="box" style={{background: 'transparent', border: 'none'}}>
          <Arrow width={16} style={{transform: `rotate(-90deg)`}} />
        </button>
      </div>
      <div className="row">
        <div className="box">
          <span className="text">S</span>
        </div>
        <div className="box">
          <span className="text">M</span>
        </div>
        <div className="box">
          <span className="text">T</span>
        </div>
        <div className="box">
          <span className="text">W</span>
        </div>
        <div className="box">
          <span className="text">T</span>
        </div>
        <div className="box">
          <span className="text">F</span>
        </div>
        <div className="box">
          <span className="text">S</span>
        </div>
      </div>

      <div className="row">
        <div className="box --square">
          <span>1</span>
        </div>
        <div className="box --square">
          <span>2</span>
        </div>
        <div className="box --square --enrolled">
          <div className="labels">
            <span className="label --yellow" />
            <span className="label --yellow" />
          </div>
          <span className="today">3</span>
        </div>
        <div className="box --square --enrolled">
          <span>4</span>
        </div>
        <div className="box --square">
          <span>5</span>
        </div>
        <div className="box --square">
          <span>6</span>
        </div>
        <div className="box --square">
          <span>7</span>
        </div>
      </div>

      <div className="row">
        <div className="box --square">
          <span>1</span>
        </div>
        <div className="box --square">
          <span>2</span>
        </div>
        <div className="box --square --enrolled">
          <div className="labels">
            <span className="label --yellow" />
            <span className="label --yellow" />
          </div>
          <span className="today">3</span>
        </div>
        <div className="box --square --enrolled">
          <span>4</span>
        </div>
        <div className="box --square">
          <span>5</span>
        </div>
        <div className="box --square">
          <span>6</span>
        </div>
        <div className="box --square">
          <span>7</span>
        </div>
      </div>

      <div className="row">
        <div className="box --square">
          <span>1</span>
        </div>
        <div className="box --square">
          <span>2</span>
        </div>
        <div className="box --square --enrolled">
          <div className="labels">
            <span className="label --yellow" />
            <span className="label --yellow" />
          </div>
          <span className="today">3</span>
        </div>
        <div className="box --square">
          <span>4</span>
        </div>
        <div className="box --square">
          <span>5</span>
        </div>
        <div className="box --square">
          <span>6</span>
        </div>
        <div className="box --square">
          <span>7</span>
        </div>
      </div>

      <div className="row">
        <div className="box --square">
          <span>1</span>
        </div>
        <div className="box --square">
          <span>2</span>
        </div>
        <div className="box --square --enrolled">
          <div className="labels">
            <span className="label --yellow" />
            <span className="label --yellow" />
          </div>
          <span className="today">3</span>
        </div>
        <div className="box --square">
          <span>4</span>
        </div>
        <div className="box --square">
          <span>5</span>
        </div>
        <div className="box --square">
          <span>6</span>
        </div>
        <div className="box --square">
          <span>7</span>
        </div>
      </div>
      <div className="row">
        <div className="box --square">
          <span>1</span>
        </div>
        <div className="box --square">
          <span>2</span>
        </div>
        <div className="box --square --enrolled">
          <div className="labels">
            <span className="label --yellow" />
            <span className="label --yellow" />
          </div>
          <span className="today">3</span>
        </div>
        <div className="box --square">
          <span>4</span>
        </div>
        <div className="box --square">
          <span>5</span>
        </div>
        <div className="box --square">
          <span>6</span>
        </div>
        <div className="box --square">
          <span>7</span>
        </div>
      </div>

    </div>
  )
}

export default Calendar;