import React from 'react';

const WorkoutModal:React.FC<any> = () => {

  return (
    <>
    <div className="overlay" />
    <div className="WorkoutModal">
      <div className="head">
        <span className="item">Chest</span>
        <span className="item">Shoulder</span>
        <span className="item">Back</span>
        <span className="item selected">Biceps</span>
        <span className="item">Triceps</span>
        <span className="item">Lower</span>
        <span className="item">Abdomino</span>
        
      </div>
      
    </div> 
    <style jsx>
    {`
      .overlay{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        background-color: rgba(0,0,0,0.36);
      }
      .WorkoutModal{
        z-index: 9999;
        position: fixed;
        top: 56px;
        left: 0;
        right: 0;
        left: 8px;
        right: 8px;
        //width: 100%;
        height: 200px;
        border-radius: 3px;
        box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
        background-color: white;
      }
      .WorkoutModal > .head{
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        //background-color: red;
        margin: 4px;
        padding: 4px;
        box-sizing: border-box;
      }
      .WorkoutModal > .head > .item{
        display: inline-flex;
        
        flex: 0 0 calc((100%-16px)/5);
        padding: 4px;
        box-sizing: border-box;
        //background-color: blue;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
      }
      .WorkoutModal > .head > .item.selected{
        background: blue;
      }
    `}  
    </style>  
    </>
    
  )
}

export default WorkoutModal;