import React from 'react';

const WorkoutModal:React.FC<any> = () => {

  return (
    <>
    <div className="overlay" />
    <div className="WorkoutModal">


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
        left: 36px;
        right: 0;
        //width: 100%;
        height: 200px;
        border-radius: 3px;
        box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
        background-color: white;
      }
    `}  
    </style>  
    </>
    
  )
}

export default WorkoutModal;